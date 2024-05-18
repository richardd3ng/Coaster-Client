import { useMemo, useCallback } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import ProfileIconButton from "./ProfileIconButton";
import ProfileList from "./ProfileList";
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
                <ProfileIconButton style={styles.profileIconButton} />
                <View
                    style={{
                        paddingLeft: 16,
                        justifyContent: "center",
                        paddingRight: 32,
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                            Richard Deng
                        </Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>
                            rld39
                        </Text>
                    </View>
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
                        flex: 1,
                        padding: 24,
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
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
                        backgroundStyle={styles.container}
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
