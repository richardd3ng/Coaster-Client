import { useMemo } from "react";

import { Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import ClusterList from "../../clusters/clusterList/ClusterList";
import { computeSongIdFrequencies } from "../../../utils/snapshotUtils";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import ErrorView from "../../shared/errorView/ErrorView";
import { INVALID_JAM_MEM_ID } from "../../../state/jamMem/jamMemSlice";
import LoadingView from "../../shared/loadingView/LoadingView";
import { RootState } from "../../../state/store";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useMapContext } from "../../../hooks/context/MapContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const JamMemBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const { setClusterFilter, socialFilter } = useMapContext();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });

    const {
        data: selectedJamMem,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMem(selectedJamMemId);

    const handleClose = () => {
        dispatchSetSelectedJamMemId(INVALID_JAM_MEM_ID);
        setClusterFilter({
            type: "social",
            value: socialFilter,
        });
        dismiss(ModalType.JamMem);
        setSnapIndex(BottomSheetType.Map, 1);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    const JamMemHeaderContent = selectedJamMem && (
        <>
            <View style={styles.locationInfoContainer}>
                <Icon name="pin" fill="green" style={styles.icon} />
                <Text style={styles.locationText}>
                    {selectedJamMem.location}
                </Text>
            </View>
            <Text
                style={styles.dateText}
            >{`${selectedJamMem.start.toDateString()} - ${selectedJamMem.end.toDateString()}`}</Text>
        </>
    );

    const ModalContent = isLoading ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView
            message={error.message}
            suggestion="Server may be down"
            onTryAgain={refetch}
        />
    ) : selectedJamMem ? (
        <ClusterList
            songIdFrequencies={computeSongIdFrequencies(
                selectedJamMem.snapshots
            )}
            hideRank
        />
    ) : // todo: make it so that when you click on a cluster in a jam mem and exit it takes u back to that jam mem modal
    null;

    return (
        <BottomModal
            modalType={ModalType.JamMem}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <BottomModalTopRow
                headerText={selectedJamMem?.title ?? ""}
                modalType={ModalType.JamMem}
                onClose={handleClose}
                children={JamMemHeaderContent}
            />
            {ModalContent}
        </BottomModal>
    );
};

export default JamMemBottomModal;
