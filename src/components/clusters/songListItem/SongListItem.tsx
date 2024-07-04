import React, { useEffect, useCallback, useMemo, memo } from "react";
import { Divider, Icon } from "@ui-kitten/components";
import { Image, Text, View } from "react-native";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { DEFAULT_ALBUM_COVER_URI } from "../../../constants/defaults";
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
    const previewUrl =
        "https://p.scdn.co/mp3-preview/ecc6383aac4b3f4240ae699324573e61c39e6aaf?cid=cfe923b2d660439caf2b557b21f31221";
    const { isPlaying, togglePlay } = useTrackPlayer(song?._id, previewUrl);

    useEffect(() => {
        if (registerRefetch) {
            registerRefetch(refetch);
        }
    }, [registerRefetch, refetch]);

    const handleOpenInSpotify = useCallback(() => {
        if (song) {
            openInSpotify(song.uri);
        }
    }, [song]);

    const SongContent = useMemo(() => {
        if (isLoading) {
            return (
                <LoadingView
                    containerStyle={styles.errorLoadingContainer}
                    hideText
                />
            );
        }
        if (isError) {
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
                <View style={styles.textContainer}>
                    <View style={styles.nameContainer}>
                        {isPlaying && <SongPlayingAnimation />}
                        <Text style={styles.nameText}>{song.name}</Text>
                    </View>
                    <Text style={styles.artistText}>
                        {song.artists.join(", ")}
                    </Text>
                </View>
            );
        }
        return null;
    }, [isLoading, isError, error, song, isPlaying, styles]);

    const PlayArea = useMemo(() => {
        return (
            <CustomPressable
                onPress={togglePlay}
                style={styles.listItemPressable}
            >
                <View style={styles.listItemContainer}>
                    {!hideRank && (
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>{rank}</Text>
                        </View>
                    )}
                    <View style={styles.imageContainer}>
                        <Image
                            source={
                                song?.albumUrl
                                    ? { uri: song.albumUrl }
                                    : DEFAULT_ALBUM_COVER_URI
                            }
                            style={styles.image}
                        />
                    </View>
                    {SongContent}
                    <View style={styles.frequencyContainer}>
                        <Text style={styles.playCountText}>Play Count</Text>
                        <Text style={styles.frequencyText}>{frequency}</Text>
                    </View>
                </View>
            </CustomPressable>
        );
    }, [song, rank, frequency, hideRank, styles, togglePlay, SongContent]);

    return (
        <View style={styles.container}>
            {PlayArea}
            <Divider style={styles.verticalDivider} />
            <CustomPressable
                style={styles.arrowPressable}
                onPress={handleOpenInSpotify}
            >
                <View style={styles.iconContainer}>
                    <Icon name="arrow-ios-forward" fill="gray" />
                </View>
            </CustomPressable>
        </View>
    );
};

export default React.memo(SongListItem);
