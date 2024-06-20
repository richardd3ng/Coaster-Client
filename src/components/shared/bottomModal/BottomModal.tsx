import { ReactNode, useCallback, useMemo } from "react";

import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";

import BottomModalWrapper from "../bottomModalWrapper/BottomModalWrapper";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface BottomModalProps extends BottomSheetModalProps {
    modalType: ModalType;
    children: ReactNode;
}

const BottomModal: React.FC<BottomModalProps> = ({
    modalType,
    children,
    ...props
}: BottomModalProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
    const snapPoints =
        props.snapPoints || useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dismiss(modalType);
        }
    }, []);

    return (
        <BottomModalWrapper>
            <BottomSheetModal
                ref={modalRefs[modalType]}
                index={snapIndexes[modalType]}
                snapPoints={snapPoints}
                onChange={props.onChange || handleSheetChanges}
                handleComponent={null}
                backgroundStyle={styles.bottomSheetModal}
            >
                {children}
            </BottomSheetModal>
        </BottomModalWrapper>
    );
};

export default BottomModal;
