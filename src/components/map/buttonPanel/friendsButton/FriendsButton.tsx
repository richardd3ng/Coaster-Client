import { useCallback } from "react";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../../hooks/context/BottomSheetContext";
import MapIconButton from "../mapIconButton/MapIconButton";
import { ModalType, useModal } from "../../../../hooks/context/ModalContext";
import styles from "./styles";
import { postSnapshots } from "../../../../api/snapshotAPI";

const FriendsButton: React.FC = () => {
    const { dismiss, present } = useModal();
    const { close } = useBottomSheet();

    const handlePress = useCallback(() => {
        postSnapshots();
        present(ModalType.Friends);
        dismiss(ModalType.Cluster);
        dismiss(ModalType.JamMem);
        close(BottomSheetType.Map);
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
