import React, { useMemo, useCallback } from "react";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Button, Icon } from "@ui-kitten/components";
import { Text, View } from "react-native";

import { ModalType, useModal } from "../../../context/modalContext";
import ProfileIconButton from "./ProfileIconButton";
import ProfileList from "./ProfileList";
import styles from "./styles";

const ProfileBottomModal: React.FC = () => {
    const { modalRefs, dismissModal, isModalVisible } = useModal();
    const snapPoints = useMemo(() => ["40%"], []);

    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                dismissModal(ModalType.Profile);
            }
        },
        [dismissModal]
    );

    const CloseButton = (
        <Button
            style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                position: "absolute",
                top: 4,
                right: 4,
            }}
            appearance="ghost"
            accessoryLeft={<Icon name={"close"} fill="gray" />}
            onPress={() => dismissModal(ModalType.Profile)}
        />
    );

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
                {CloseButton}
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
                        pointerEvents: isModalVisible(ModalType.Profile)
                            ? undefined
                            : "box-none",
                        backgroundColor: isModalVisible(ModalType.Profile)
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
