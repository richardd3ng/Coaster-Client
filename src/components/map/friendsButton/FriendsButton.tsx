import { useCallback } from "react";

import MapIconButton from "../mapIconButton/MapIconButton";
import styles from "./styles";
import {
    useClusterModal,
    useFriendsModal,
    useJamMemModal,
} from "../../../hooks/context/ModalContext";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { postSnapshots } from "../../../api/snapshotAPI";

const FriendsButton: React.FC = () => {
    const { dismiss: dismissClusterModal } = useClusterModal();
    const { dismiss: dismissJamMemModal } = useJamMemModal();
    const { present: presentFriendsModal } = useFriendsModal();
    const { close: closeMapBottomSheet } = useMapBottomSheet();

    const handlePress = useCallback(() => {
        postSnapshots();
        presentFriendsModal();
        dismissClusterModal();
        dismissJamMemModal();
        closeMapBottomSheet();
    }, []);

    return (
        <MapIconButton
            name="people"
            onPress={handlePress}
            filled
            style={styles.button}
        />
    );
};

export default FriendsButton;
