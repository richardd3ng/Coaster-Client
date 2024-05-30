import { useMemo } from "react";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import FriendsList from "../friendsList/FriendsList";

const FriendsBottomModal: React.FC = () => {
    const { dismiss } = useModal();
    const { setSnapIndex } = useBottomSheet();
    const snapPoints = useMemo(() => [DEFAULT_SNAP_POINTS[2]], []);

    const handleClose = () => {
        dismiss(ModalType.Friends);
        setSnapIndex(BottomSheetType.Map, 0);
    };

    const handleSheetChanges = (index: number) => {
        if (index === -1) {
            handleClose();
        }
    };

    return (
        <BottomModal
            modalType={ModalType.Friends}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            <BottomModalTopRow
                headerText="Friends"
                modalType={ModalType.Friends}
                onClose={handleClose}
            />
            <FriendsList />
        </BottomModal>
    );
};

export default FriendsBottomModal;
