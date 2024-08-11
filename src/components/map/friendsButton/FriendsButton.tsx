import { useCallback } from "react";

import MapIconButton from "../mapIconButton/MapIconButton";
import styles from "./styles";
import {
    useClusterModal,
    useFriendsModal,
    useJamMemModal,
    useSearchResultsModal,
} from "../../../hooks/context/ModalContext";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";

const FriendsButton: React.FC = () => {
    const { dismiss: dismissClusterModal } = useClusterModal();
    const { dismiss: dismissJamMemModal } = useJamMemModal();
    const { dismiss: dismissSearchResultsModal } = useSearchResultsModal();
    const { present: presentFriendsModal } = useFriendsModal();
    const { close: closeMapBottomSheet } = useMapBottomSheet();

    const handlePress = useCallback(() => {
        presentFriendsModal();
        dismissClusterModal();
        dismissJamMemModal();
        dismissSearchResultsModal();
        closeMapBottomSheet();
    }, []);

    return (
        <MapIconButton
            name="people"
            onPress={handlePress}
            filled
            iconColor={styles.button.color}
            style={styles.button}
        />
    );
};

export default FriendsButton;
