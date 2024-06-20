import { ModalType } from "../../../../hooks/context/ModalContext";
import BottomModal from "../../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../../shared/bottomModalTopRow/BottomModalTopRow";

const AccountBottomModal: React.FC = () => {
    return (
        <BottomModal modalType={ModalType.Account}>
            <BottomModalTopRow
                headerText="Account Settings"
                modalType={ModalType.Account}
            />
        </BottomModal>
    );
};

export default AccountBottomModal;
