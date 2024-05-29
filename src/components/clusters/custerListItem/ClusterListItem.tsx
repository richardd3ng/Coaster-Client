import { useEffect } from "react";

import { Image, Text, View } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import { openSongInSpotify } from "../../../utils/spotifyUtils";
import { useSong } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ClusterListItemProps {
    rank: number;
    songIdFrequency: number[]; // [id, frequency]
    registerRefetch: (refetch: () => void) => void;
}

const ClusterListItem: React.FC<ClusterListItemProps> = ({
    rank,
    songIdFrequency,
    registerRefetch,
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
            openSongInSpotify(song.uri);
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
            <Text style={styles.titleText}>{song.title}</Text>
            <Text style={styles.artistText}>{song.artist}</Text>
        </View>
    ) : null;

    return (
        <CustomPressable onPress={handleSelect}>
            <View style={styles.listItemContainer}>
                <View style={styles.rankContainer}>
                    <Text style={styles.rankText}>{rank}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri:
                                song?.albumUri ??
                                "https://picsum.photos/200/300",
                        }}
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
