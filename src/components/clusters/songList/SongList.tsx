import { memo, useCallback, useRef } from "react";

import { Divider } from "@ui-kitten/components";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

import createStyles from "./styles";
import { getValidAccessToken } from "../../../api/tokenUtils";
import SaveToSpotifyPlaylistButton from "../saveToSpotifyPlaylistButton/SaveToSpotifyPlaylistButton";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import SongListItem from "../songListItem/SongListItem";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToCreatePlaylistFromSongIds } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useCurrentUser from "../../../hooks/useCurrentUser";

interface SongListProps {
    songIdFrequencies: SongIdFrequencies;
    hideRank?: boolean;
}

const SongList: React.FC<SongListProps> = ({
    songIdFrequencies,
    hideRank = false,
}: SongListProps) => {
    const styles = useThemeAwareObject(createStyles);
    const currentUserSpotifyId = useCurrentUser().spotifyId;
    const {
        mutate: createSpotifyPlaylist,
        isError,
        error,
        reset,
    } = useMutationToCreatePlaylistFromSongIds();
    useMutationErrorAlert({ isError, error, reset });
    const refetchFunctionsRef = useRef<(() => void)[]>([]);

    const registerRefetch = useCallback((refetch: () => void) => {
        refetchFunctionsRef.current.push(refetch);
    }, []);

    const onRefresh = useCallback(() => {
        refetchFunctionsRef.current.forEach((refetch) => refetch());
    }, []);

    const renderItem = useCallback(
        ({ item, index }: { item: [string, number]; index: number }) => (
            <SongListItem
                key={index}
                rank={index + 1}
                songIdFrequency={item}
                registerRefetch={registerRefetch}
                hideRank={hideRank}
            />
        ),
        []
    );

    const handleSaveToSpotify = useCallback(async () => {
        createSpotifyPlaylist({
            name: "Coaster Cluster Playlist",
            accessToken: await getValidAccessToken(currentUserSpotifyId),
            description: "Created from a Coaster cluster!",
            songIds: songIdFrequencies.map(([songId, _]) => songId),
        });
    }, [createSpotifyPlaylist, currentUserSpotifyId, songIdFrequencies]);

    return (
        <View style={styles.container}>
            {songIdFrequencies.length > 0 && (
                <SaveToSpotifyPlaylistButton onPress={handleSaveToSpotify} />
            )}
            <View style={styles.listContainer}>
                <FlashList
                    data={songIdFrequencies}
                    keyExtractor={(item) => item[0]}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator
                    ItemSeparatorComponent={() => (
                        <Divider style={styles.divider} />
                    )}
                    refreshing={false}
                    onRefresh={onRefresh}
                    estimatedItemSize={100}
                />
            </View>
        </View>
    );
};

export default memo(SongList);
