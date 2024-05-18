import { useCallback, useMemo } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import CloseButton from "../../../shared/closeButton/CloseButton";
import IconButton from "../../../shared/iconButton/IconButton";
import { ModalType, useModal } from "../../../../hooks/context/ModalContext";
import ProfileList from "../profileList/ProfileList";
import styles from "./styles";

const ProfileBottomModal: React.FC = () => {
    const { refs: modalRefs, dismiss, isVisible } = useModal();
    const snapPoints = useMemo(() => ["40%"], []);

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
                    iconColor="blue"
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
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
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
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default ProfileBottomModal;
