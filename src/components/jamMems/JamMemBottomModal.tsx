import React, {
    useMemo,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { Button, Icon } from "@ui-kitten/components";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

import { ModalType, useModal } from "../../context/ModalContext";
import styles from "./styles";
import { JamMem } from "../../types/custom";
import { RootState } from "../../state/store";
import { fetchJamMemDetails } from "../../api/jamMemAPI";

const JamMemBottomModal: React.FC = () => {
    const [selectedJamMem, setSelectedJamMem] = useState<JamMem | null>(null);
    const {
        modalRefs,
        dismissModal,
        isModalVisible,
        snapIndexes,
        setSnapIndex,
    } = useModal();
    const snapPoints = useMemo(() => ["35%", "50%", "92.5%"], []);

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
            onPress={() => {}}
        />
    );

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });

    useEffect(() => {
        const fetchJamMemData = async () => {
            if (selectedJamMemId !== -1) {
                const jamMemDetails = await fetchJamMemDetails(
                    selectedJamMemId
                );
                setSelectedJamMem(jamMemDetails);
            }
        };

        fetchJamMemData();
    }, [selectedJamMemId]);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dismissModal(ModalType.JamMem);
        }
    }, []);

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={modalRefs[ModalType.JamMem]}
                    index={snapIndexes[ModalType.JamMem]}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    handleComponent={null}
                    backgroundStyle={styles.container}
                >
                    {selectedJamMem ? (
                        <Text>{selectedJamMem.title}</Text>
                    ) : (
                        <Text>Loading...</Text> // TODO: Add loading spinner
                    )}
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default JamMemBottomModal;
