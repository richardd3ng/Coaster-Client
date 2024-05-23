import { useMemo } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import BottomModalWrapper from "../../../../shared/bottomModalWrapper/BottomModalWrapper";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../../hooks/context/BottomSheetContext";
import CloseButton from "../../../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../../hooks/context/ModalContext";
import { dispatchSetSelectedJamMemId } from "../../../../../state/storeUtils";
import ErrorView from "../../../../shared/errorView/ErrorView";
import LoadingView from "../../../../shared/loadingView/LoadingView";
import { RootState } from "../../../../../state/store";
import { useJamMem } from "../../../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";
import createStyles from "./styles";

const JamMemBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
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
        <Text>{selectedJamMem.title}</Text>
    ) : null;

    return (
        <BottomModalWrapper>
            <BottomSheetModal
                ref={modalRefs[ModalType.JamMem]}
                index={snapIndexes[ModalType.JamMem]}
                snapPoints={snapPoints}
                handleComponent={null}
                backgroundStyle={styles.bottomSheetModal}
                onChange={handleSheetChanges}
            >
                {ModalContent}
                <CloseButton onPress={handleClose} />
            </BottomSheetModal>
        </BottomModalWrapper>
    );
};

export default JamMemBottomModal;
