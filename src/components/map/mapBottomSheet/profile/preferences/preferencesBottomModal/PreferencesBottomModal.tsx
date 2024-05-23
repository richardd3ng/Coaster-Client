import { useCallback, useMemo } from "react";

import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from "react-native";

import CloseButton from "../../../../../shared/closeButton/CloseButton";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../../../../hooks/context/ModalContext";
import PreferencesList from "../preferencesList/PreferencesList";
import styles from "./styles";

const PreferencesBottomModal: React.FC = () => {
    const { refs: modalRefs, dismiss } = useModal();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[1]], []);

    const handleSheetChanges = useCallback((index: number) => {
        if (index === -1) {
            dismiss(ModalType.Preferences);
        }
    }, []);

    const TopRow: React.FC = () => {
        return (
            <View style={styles.preferencesBottomModalTopRow}>
                <Text style={styles.HeaderText}>Preferences</Text>
                <CloseButton onPress={() => dismiss(ModalType.Preferences)} />
            </View>
        );
    };

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={modalRefs[ModalType.Preferences]}
                    index={0}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    handleComponent={null}
                    backgroundStyle={styles.bottomSheetModal}
                >
                    <TopRow />
                    <PreferencesList />
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

export default PreferencesBottomModal;
