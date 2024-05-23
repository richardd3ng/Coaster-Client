import { useEffect, useMemo, useState } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActivityIndicator, Text } from "react-native";
import { useSelector } from "react-redux";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../../hooks/context/BottomSheetContext";
import CloseButton from "../../../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../../hooks/context/ModalContext";
import { fetchJamMem } from "../../../../../api/jamMemAPI";
import { JamMem } from "../../../../../types/custom";
import { RootState } from "../../../../../state/store";
import styles from "./styles";
import { dispatchSetSelectedJamMemId } from "../../../../../state/storeUtils";

const JamMemBottomModal: React.FC = () => {
    const [selectedJamMem, setSelectedJamMem] = useState<JamMem | null>(null);
    const { refs: modalRefs, dismiss, snapIndexes } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });

    useEffect(() => {
        const fetchJamMemDetails = async () => {
            if (selectedJamMemId) {
                setSelectedJamMem(await fetchJamMem(selectedJamMemId));
            }
        };
        fetchJamMemDetails();
    }, [selectedJamMemId]);

    const handleClose = () => {
        dispatchSetSelectedJamMemId(null);
        setSelectedJamMem(null);
        dismiss(ModalType.JamMem);
        setSnapIndex(BottomSheetType.Map, 1);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
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
                    onChange={handleSheetChanges}
                >
                    {selectedJamMem ? (
                        <Text>{selectedJamMem.title}</Text>
                    ) : (
                        <ActivityIndicator />
                    )}
                    <CloseButton onPress={handleClose} />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default JamMemBottomModal;
