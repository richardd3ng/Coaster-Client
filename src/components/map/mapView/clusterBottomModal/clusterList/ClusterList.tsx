import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";

import ClusterListItem from "../custerListItem/ClusterListItem";
import createStyles from "./styles";
import { SongFrequency } from "../clusterBottomModal";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

interface ClusterListProps {
    clusterData: SongFrequency[];
}

const ClusterList: React.FC<ClusterListProps> = ({
    clusterData,
}: ClusterListProps) => {
    const styles = useThemeAwareObject(createStyles);

    const renderItem = useCallback(
        ({ item }: { item: SongFrequency }) => (
            <ClusterListItem songFrequency={item} />
        ),
        []
    );

    return (
        <BottomSheetFlatList
            data={clusterData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator
            style={styles.flatList}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
    );
};

export default ClusterList;
