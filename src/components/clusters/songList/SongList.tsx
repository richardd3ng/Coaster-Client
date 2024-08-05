import { memo, useCallback, useRef } from "react";

import { Divider } from "@ui-kitten/components";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

import createStyles from "./styles";
import SaveToSpotifyPlaylistButton from "../saveToSpotifyPlaylistButton/SaveToSpotifyPlaylistButton";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import SongListItem from "../songListItem/SongListItem";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface SongListProps {
    songIdFrequencies: SongIdFrequencies;
    playlistName: string;
    playlistDescription: string;
    hideRank?: boolean;
}

const SongList: React.FC<SongListProps> = ({
    songIdFrequencies,
    playlistName,
    playlistDescription,
    hideRank = false,
}: SongListProps) => {
    const styles = useThemeAwareObject(createStyles);
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

    return (
        <View style={styles.container}>
            {songIdFrequencies.length > 0 && (
                <SaveToSpotifyPlaylistButton
                    playlistName={playlistName}
                    playlistDescription={playlistDescription}
                    songIdFrequencies={songIdFrequencies}
                />
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
                    estimatedItemSize={60}
                />
            </View>
        </View>
    );
};

export default memo(SongList);
