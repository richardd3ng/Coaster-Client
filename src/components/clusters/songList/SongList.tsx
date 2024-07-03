import { useCallback, useState } from "react";

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
    const styles = useThemeAwareObject(createStyles);
    const currentUserSpotifyId = useCurrentUser().spotifyId;
    const {
        mutate: createSpotifyPlaylist,
        isError,
        error,
        reset,
    } = useMutationToCreatePlaylistFromSongIds();
    useMutationErrorAlert({ isError, error, reset });
    const [refetchFunctions, setRefetchFunctions] = useState<(() => void)[]>(
        []
    );

    const registerRefetch = useCallback((refetch: () => void) => {
        setRefetchFunctions((prev) => [...prev, refetch]);
    }, []);

    const onRefresh = useCallback(() => {
        refetchFunctions.forEach((refetch) => refetch());
    }, [refetchFunctions]);

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
    }, []);

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
