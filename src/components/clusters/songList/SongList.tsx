import { memo, useCallback, useRef } from "react";

import { BottomSheetFlatList, BottomSheetVirtualizedList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import { getValidAccessToken } from "../../../api/tokenUtils";
import SaveToSpotifyPlaylistButton from "../saveToSpotifyPlaylistButton/SaveToSpotifyPlaylistButton";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import SongListItem from "../songPlayingAnimation/songListItem/SongListItem";
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
    console.log("rendering list with size:", songIdFrequencies.length);
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
            <BottomSheetVirtualizedList
                data={songIdFrequencies}
                keyExtractor={(item) => item[0].toString()}
                getItemCount={() => songIdFrequencies.length}
                getItem={(data, index) => data[index]}
                renderItem={renderItem}
                showsVerticalScrollIndicator
                style={styles.flatList}
                ItemSeparatorComponent={() => (
                    <Divider style={styles.divider} />
                )}
                refreshing={false}
                onRefresh={onRefresh}
            />
        </View>
    );
};

export default memo(SongList);
