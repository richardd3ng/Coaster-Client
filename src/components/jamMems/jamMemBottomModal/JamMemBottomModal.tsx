import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import CloseButton from "../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import { JamMem } from "../../../types/custom";
import { RootState } from "../../../state/store";
import { fetchJamMemDetails } from "../../../api/jamMemAPI";
import styles from "./styles";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";

const JamMemBottomModal: React.FC = () => {
    const [selectedJamMem, setSelectedJamMem] = useState<JamMem | null>(null);
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

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

    const handleClose = () => {
        dismiss(ModalType.JamMem);
        setSnapIndex(BottomSheetType.Map, 1);
    };

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={modalRefs[ModalType.JamMem]}
                    index={snapIndexes[ModalType.JamMem]}
                    snapPoints={snapPoints}
                    handleComponent={null}
                    backgroundStyle={styles.container}
                >
                    {selectedJamMem ? (
                        <Text>{selectedJamMem.title}</Text>
                    ) : (
                        <Text>Loading...</Text> // TODO: Add loading spinner
                    )}
                    <CloseButton onPress={handleClose} />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default JamMemBottomModal;
