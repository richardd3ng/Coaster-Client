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
import { SocialFilter } from "../../../types/filters";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { Text } from "react-native";
import { useSearchResult } from "../../../hooks/redux/useSelectorHooks";

const SearchResultsBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { clusterFilter, setClusterFilter } = useMapContext();
    const { dismiss } = useSearchResultsModal();
    const { setSnapIndex: setMapBottomSheetSnapIndex } = useMapBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS.slice(0, 2), []);
    const searchResult = useSearchResult();

    const handleDismiss = () => {
        dispatchSetSearchResult(null);
        dismiss();
        setMapBottomSheetSnapIndex(0);
        setClusterFilter({
            type: clusterFilter.type,
            value: clusterFilter.value as SocialFilter,
        });
    };

    return (
        <BottomModal
            modalType={ModalType.SearchResults}
            onDismiss={handleDismiss}
            snapPoints={snapPoints}
        >
            <BottomModalTopRow
                headerText="Search Results"
                modalType={ModalType.SearchResults}
            />
            <Text style={styles.text}>
                {`Clusters matching search "${searchResult?.name}" (${searchResult?.type})`}
            </Text>
        </BottomModal>
    );
};

export default SearchResultsBottomModal;
