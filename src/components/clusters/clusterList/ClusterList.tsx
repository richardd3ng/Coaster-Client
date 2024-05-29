import { useCallback, useState } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";

import ClusterListItem from "../custerListItem/ClusterListItem";
import createStyles from "./styles";
import { SongIdFrequencies } from "../../../utils/superclusterManager";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ClusterListProps {
    songIdFrequencies: SongIdFrequencies;
}

const ClusterList: React.FC<ClusterListProps> = ({
    songIdFrequencies,
}: ClusterListProps) => {
    const styles = useThemeAwareObject(createStyles);
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
        ({ item, index }: { item: number[]; index: number }) => (
            <ClusterListItem
                rank={index + 1}
                songIdFrequency={item}
                registerRefetch={registerRefetch}
            />
        ),
        []
    );

    return (
        <BottomSheetFlatList
            data={songIdFrequencies}
            keyExtractor={(item) => item[0].toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator
            style={styles.flatList}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
            refreshing={false}
            onRefresh={onRefresh}
        />
    );
};

export default ClusterList;
