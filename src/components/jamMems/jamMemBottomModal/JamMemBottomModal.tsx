import { useMemo } from "react";

import { Text } from "react-native";
import { useSelector } from "react-redux";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../state/storeUtils";
import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import { RootState } from "../../../state/store";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";

const JamMemBottomModal: React.FC = () => {
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    })!;

    const {
        data: selectedJamMem,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMem(selectedJamMemId);

    const handleClose = () => {
        dispatchSetSelectedJamMemId(null);
        dismiss(ModalType.JamMem);
        setSnapIndex(BottomSheetType.Map, 1);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    const ModalContent = isLoading ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView
            message={error.message}
            suggestion="Server may be down"
            onTryAgain={refetch}
        />
    ) : selectedJamMem ? (
        <>
            <Text>{selectedJamMem.location}</Text>
            <Text>{selectedJamMem.start.toDateString()}</Text>
            <Text>{selectedJamMem.end.toDateString()}</Text>
        </>
    ) : null;

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
            />
            {ModalContent}
        </BottomModal>
    );
};

export default JamMemBottomModal;
