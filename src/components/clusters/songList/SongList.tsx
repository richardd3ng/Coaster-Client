import { memo, useCallback, useRef } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { View } from "react-native";
import { Divider } from "@ui-kitten/components";
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
    console.log("LIST RE_RENDER");
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

    const MemoizedSongListItem = memo(
        ({
            rank,
            songIdFrequency,
            registerRefetch,
            hideRank,
        }: {
            rank: number;
            songIdFrequency: [string, number];
            registerRefetch: (refetch: () => void) => void;
            hideRank: boolean;
        }) => (
            <SongListItem
                rank={rank}
                songIdFrequency={songIdFrequency}
                registerRefetch={registerRefetch}
                hideRank={hideRank}
            />
        )
    );

    const renderItem = useCallback(
        ({ item, index }: { item: [string, number]; index: number }) => (
            <MemoizedSongListItem
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
            <BottomSheetFlatList
                data={songIdFrequencies}
                keyExtractor={(item) => item[0].toString()}
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

export default SongList;
