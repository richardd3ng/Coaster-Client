import { memo, useEffect, useCallback, useMemo } from "react";

import { Divider, Icon } from "@ui-kitten/components";
import FastImage from "react-native-fast-image";
import { Text, View } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { DEFAULT_ALBUM_COVER_URI } from "../../../constants/assets";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import { openInSpotify } from "../../../utils/spotifyUtils";
import SongPlayingAnimation from "../songPlayingAnimation/SongPlayingAnimation";
import { useSong } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useTrackPlayer from "../../../hooks/useTrackPlayer";

interface SongListItemProps {
    rank: number;
    songIdFrequency: [string, number]; // [id, frequency]
    registerRefetch: (refetch: () => void) => void;
    hideRank?: boolean;
}

const SongListItem: React.FC<SongListItemProps> = ({
    rank,
    songIdFrequency,
    registerRefetch,
    hideRank = false,
}: SongListItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [id, frequency] = songIdFrequency;
    const { data: song, isLoading, isError, error, refetch } = useSong(id);
    const { togglePlay } = useTrackPlayer(song?._id, song?.previewUrl ?? "");

    useEffect(() => {
        if (registerRefetch) {
            registerRefetch(refetch);
        }
    }, [registerRefetch, refetch]);

    const handleOpenInSpotify = useCallback(() => {
        if (song) {
            openInSpotify(song.uri);
        }
    }, [song?.uri]);

    const SongContent = useMemo(() => {
        if (isLoading) {
            return (
                <LoadingView
                    containerStyle={styles.errorLoadingContainer}
                    hideText
                />
            );
        }
        if (isError || error) {
            return (
                <ErrorView
                    containerStyle={styles.errorLoadingContainer}
                    message={error.message}
                    messageStyle={styles.errorText}
                    hideSuggestion
                />
            );
        }
        if (song) {
            return (
                <View style={{ flex: styles.errorLoadingContainer.flex }}>
                    <View style={styles.nameContainer}>
                        <SongPlayingAnimation songId={song._id} />
                        <Text style={styles.nameText} numberOfLines={1}>
                            {song.name}
                        </Text>
                    </View>
                    <Text style={styles.artistText} numberOfLines={1}>
                        {song.artists.join(", ")}
                    </Text>
                </View>
            );
        }
        return null;
    }, [isLoading, isError, error?.message, song, styles]);

    const imageSource = useMemo(
        () =>
            song?.albumUrl ? { uri: song.albumUrl } : DEFAULT_ALBUM_COVER_URI,
        [song?.albumUrl]
    );

    const renderRank = useMemo(
        () =>
            !hideRank && (
                <View style={styles.rankContainer}>
                    <Text style={styles.rankText}>{rank}</Text>
                </View>
            ),
        [hideRank, rank, styles.rankContainer, styles.rankText]
    );

    const renderFrequency = useMemo(
        () => (
            <View style={styles.frequencyContainer}>
                <Text style={styles.playCountText}>Count</Text>
                <Text style={styles.frequencyText}>{frequency}</Text>
            </View>
        ),
        [
            frequency,
            styles.frequencyContainer,
            styles.playCountText,
            styles.frequencyText,
        ]
    );

    return (
        <View style={styles.container}>
            <CustomPressable
                onPress={togglePlay}
                style={styles.listItemPressable}
                activeOpacity={1}
            >
                <View style={styles.listItemContainer}>
                    {renderRank}
                    <View style={styles.imageContainer}>
                        <FastImage source={imageSource} style={styles.image} />
                    </View>
                    {SongContent}
                    {renderFrequency}
                </View>
            </CustomPressable>
            <Divider style={styles.verticalDivider} />
            <CustomPressable
                style={styles.arrowPressable}
                onPress={handleOpenInSpotify}
            >
                <View style={styles.iconContainer}>
                    <Icon name="arrow-ios-forward" fill={styles.icon.color} />
                </View>
            </CustomPressable>
        </View>
    );
};

export default memo(SongListItem);
