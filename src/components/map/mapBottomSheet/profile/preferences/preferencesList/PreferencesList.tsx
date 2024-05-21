import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { PreferencesOption } from "../../../../../../types/custom";
import ShareSnapshots from "../shareSnapshots/ShareSnapshots";
import styles from "./styles";
import TrackSnapshots from "../trackSnapshots/TrackSnapshots";

const componentMap = new Map<PreferencesOption, JSX.Element>([
    [PreferencesOption.TrackSnapshots, <TrackSnapshots />],
    [PreferencesOption.ShareSnapshots, <ShareSnapshots />],
]);

const PreferencesList: React.FC = () => {
    const renderItem = useCallback(
        ({ item }: { item: PreferencesOption }) => componentMap.get(item)!,
        []
    );

    return (
        <BottomSheetFlatList
            data={Array.from(componentMap.keys())}
            keyExtractor={(profileOption) => profileOption.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
        />
    );
};

export default PreferencesList;
