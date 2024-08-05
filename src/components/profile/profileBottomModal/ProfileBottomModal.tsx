import { useCallback, useMemo } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";

import BottomModalWrapper from "../../shared/bottomModalWrapper/BottomModalWrapper";
import CloseButton from "../../shared/closeButton/CloseButton";
import createStyles from "./styles";
import {
    DEFAULT_SNAP_POINTS,
    useProfileModal,
} from "../../../hooks/context/ModalContext";
import ProfileIconButton from "../profileIconButton/ProfileIconButton";
import ProfileList from "../profileList/ProfileList";
import { useDisplayName, useUsername } from "../../../hooks/useUserHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const ProfileBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { ref, dismiss, isVisible } = useProfileModal();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);
    const displayName = useDisplayName();
    const username = useUsername();

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                dismiss();
            }
        },
        [dismiss]
    );

    const TopRow = useMemo(
        () => (
            <View style={styles.profileBottomModalTopRow}>
                <ProfileIconButton imageStyle={styles.profileIconButton} />
                <View style={styles.textContainer}>
                    <Text style={styles.displayNameText}>{displayName}</Text>
                    <Text style={styles.usernameText}>{username}</Text>
                </View>
                <CloseButton onPress={dismiss} />
            </View>
        ),
        [styles, displayName, username, dismiss]
    );

    return (
        <BottomModalWrapper>
            <View
                style={{
                    ...styles.bottomSheetModalContainer,
                    pointerEvents: isVisible ? undefined : "box-none",
                    backgroundColor: isVisible
                        ? "rgba(128, 128, 128, 0.25)"
                        : undefined,
                }}
            >
                <BottomSheetModal
                    ref={ref}
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
