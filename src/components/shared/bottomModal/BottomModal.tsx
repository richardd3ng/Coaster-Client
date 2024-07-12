import { memo, ReactNode, useCallback, useMemo } from "react";
import { BottomSheetModal, BottomSheetModalProps } from "@gorhom/bottom-sheet";
import BottomModalWrapper from "../bottomModalWrapper/BottomModalWrapper";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModalHook,
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
    const { ref, dismiss, snapIndex } = useModalHook(modalType);
    const snapPoints =
        props.snapPoints || useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                dismiss();
            }
        },
        [dismiss]
    );

    return (
        <BottomModalWrapper>
            <BottomSheetModal
                ref={ref}
                index={snapIndex}
                snapPoints={snapPoints}
                onChange={props.onChange || handleSheetChanges}
                onDismiss={props.onDismiss}
                handleComponent={null}
                backgroundStyle={styles.bottomSheetModal}
            >
                {children}
            </BottomSheetModal>
        </BottomModalWrapper>
    );
};

export default memo(BottomModal);
