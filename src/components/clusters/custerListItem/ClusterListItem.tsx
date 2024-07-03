import { useEffect } from "react";

import { Image, Text, View } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import { openInSpotify } from "../../../utils/spotifyUtils";
import { useSong } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { DEFAULT_ALBUM_COVER_URI } from "../../../constants/defaults";

interface ClusterListItemProps {
    rank: number;
    songIdFrequency: [string, number]; // [id, frequency]
    registerRefetch: (refetch: () => void) => void;
    hideRank?: boolean;
}

const ClusterListItem: React.FC<ClusterListItemProps> = ({
    rank,
    songIdFrequency,
    registerRefetch,
    hideRank = false,
}: ClusterListItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [id, frequency] = songIdFrequency;
    const { data: song, isLoading, isError, error, refetch } = useSong(id);

    useEffect(() => {
        if (registerRefetch) {
            registerRefetch(refetch);
        }
    }, [registerRefetch, refetch]);

    const handleSelect = () => {
        if (song) {
            openInSpotify(song.uri);
        }
    };

    const SongContent = isLoading ? (
        <LoadingView containerStyle={styles.errorLoadingContainer} hideText />
    ) : isError ? (
        <ErrorView
            containerStyle={styles.errorLoadingContainer}
            message={error.message}
            messageStyle={styles.errorText}
            hideSuggestion
        />
    ) : song ? (
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>{song.name}</Text>
            <Text style={styles.artistText}>{song.artists.join(", ")}</Text>
        </View>
    ) : null;

    return (
        <CustomPressable onPress={handleSelect}>
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
};

export default ClusterListItem;
