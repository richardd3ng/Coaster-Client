import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import createStyles from "./styles";
import { PreferencesOption } from "../../../types/navigation";
import SnapshotPrivacyButton from "../snapshotPrivacyButton/SnapshotPrivacyButton";
import SnapshotRetentionButton from "../snapshotRetentionButton/SnapshotRetentionButton";
import TrackSnapshotsButton from "../trackSnapshotsButton/TrackSnapshotsButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const componentMap = new Map<PreferencesOption, JSX.Element>([
    [PreferencesOption.TrackSnapshots, <TrackSnapshotsButton />],
    [PreferencesOption.SnapshotPrivacy, <SnapshotPrivacyButton />],
    [PreferencesOption.SnapshotRetention, <SnapshotRetentionButton />],
]);

const PreferencesList: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    const renderItem = useCallback(
        ({ item }: { item: PreferencesOption }) => componentMap.get(item)!,
        []
    );

    return (
        <BottomSheetFlatList
            data={Array.from(componentMap.keys())}
            keyExtractor={(profileOption) => profileOption.toString()}
            renderItem={renderItem}
            style={styles.flatlist}
        />
    );
};

export default PreferencesList;
