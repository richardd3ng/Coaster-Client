import React, { useCallback, useMemo } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";

import BottomModalWrapper from "../../shared/bottomModalWrapper/BottomModalWrapper";
import CloseButton from "../../shared/closeButton/CloseButton";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import ProfileIconButton from "../profileIconButton/ProfileIconButton";
import ProfileList from "../profileList/ProfileList";
import useCurrentUser from "../../../hooks/useCurrentUser";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const ProfileBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { refs: modalRefs, dismiss, isVisible } = useModal();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);
    const user = useCurrentUser();

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                dismiss(ModalType.Profile);
            }
        },
        [dismiss]
    );

    const TopRow = useMemo(
        () => (
            <View style={styles.profileBottomModalTopRow}>
                <ProfileIconButton
                    style={styles.profileIconButton}
                    imageStyle={styles.profileIconButton}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.displayNameText}>
                        {user?.displayName ?? "Guest"}
                    </Text>
                    <Text style={styles.usernameText}>
                        {user?.username ?? "Guest"}
                    </Text>
                </View>
                <CloseButton onPress={() => dismiss(ModalType.Profile)} />
            </View>
        ),
        [styles, user, dismiss]
    );

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
                    {TopRow}
                    <ProfileList />
                </BottomSheetModal>
            </View>
        </BottomModalWrapper>
    );
};

export default ProfileBottomModal;
