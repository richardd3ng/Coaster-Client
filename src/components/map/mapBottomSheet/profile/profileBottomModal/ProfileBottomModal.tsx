import { useCallback, useMemo } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";

import BottomModalWrapper from "../../../../shared/bottomModalWrapper/BottomModalWrapper";
import CloseButton from "../../../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../../hooks/context/ModalContext";
import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileList from "../profileList/ProfileList";
import styles from "./styles";

const ProfileBottomModal: React.FC = () => {
    const { refs: modalRefs, dismiss, isVisible } = useModal();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dismiss(ModalType.Profile);
        }
    }, []);

    const TopRow: React.FC = () => {
        return (
            <View style={styles.profileBottomModalTopRow}>
                <IconButton
                    style={styles.profileIconButton}
                    iconName="person"
                    iconColor="royalblue"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.displayNameText}>Richard Deng</Text>
                    <Text style={styles.usernameText}>rld39</Text>
                </View>
                <CloseButton onPress={() => dismiss(ModalType.Profile)} />
            </View>
        );
    };

    return (
        <BottomModalWrapper>
            <View
                style={{
                    ...styles.bottomSheetModalContainer,
                    pointerEvents: isVisible(ModalType.Profile)
                        ? undefined
                        : "box-none",
                    backgroundColor: isVisible(ModalType.Profile)
                        ? "rgba(128, 128, 128, 0.25)"
                        : undefined,
                }}
            >
                <BottomSheetModal
                    ref={modalRefs[ModalType.Profile]}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    handleComponent={null}
                    backgroundStyle={styles.bottomSheetModal}
                >
                    <TopRow />
                    <ProfileList />
                </BottomSheetModal>
            </View>
        </BottomModalWrapper>
    );
};

export default ProfileBottomModal;
