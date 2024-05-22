import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";
import { Text, View } from "react-native";

import CustomPressable from "../../../../shared/customPressable/CustomPressable";
import { PlaceData } from "../../../../../api/locationAPI";
import { SongFrequency } from "../clusterBottomModal";
import ClusterListItem from "../custerListItem/ClusterListItem";
import styles from "./styles";

interface ClusterListProps {
    clusterData: SongFrequency[];
}

const ClusterList: React.FC<ClusterListProps> = (props: ClusterListProps) => {
    const renderItem = useCallback(
        ({ item }: { item: SongFrequency }) => (
            <ClusterListItem songFrequency={item} />
        ),
        []
    );

    return (
        <BottomSheetFlatList
            data={props.clusterData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator
            style={styles.flatList}
            ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        />
    );
};

export default ClusterList;
