import { useMemo } from "react";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useSearchResultsModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSearchResult } from "../../../state/storeUtils";
import { SnapshotPrivacy } from "../../../gql/graphql";
import { Text } from "react-native";
import useClusters from "../../../hooks/useClusters";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useSearchResult } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const SearchResultsBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { clusterFilter, setClusterFilter } = useMapContext();
    const { dismiss } = useSearchResultsModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS.slice(0, 2), []);
    const searchResult = useSearchResult();
    const { songPoints } = useClusters(null, clusterFilter);

    const handleDismiss = () => {
        dispatchSetSearchResult(null);
        dismiss();
        setMapBottomSheetSnapIndex(0);
        setClusterFilter({
            type: clusterFilter.type,
            value: clusterFilter.value as SnapshotPrivacy, 
        });
    };

    return (
        <BottomModal
            modalType={ModalType.SearchResults}
            onDismiss={handleDismiss}
            snapPoints={snapPoints}
        >
            <BottomModalTopRow
                headerText={`Search Results (${clusterFilter.value})`}
                modalType={ModalType.SearchResults}
            />
            <Text style={styles.text}>
                {`Found ${songPoints?.length ?? 0} snapshots matching search "${
                    searchResult?.name
                }" (${searchResult?.type})`}
            </Text>
        </BottomModal>
    );
};

export default SearchResultsBottomModal;
