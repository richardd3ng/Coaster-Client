import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
import ClearHistoryButton from "../clearSnapshotHistoryButton/ClearSnapshotHistoryButton";
import createStyles from "./styles";
import EditProfileButton from "../editProfileButton/EditProfileButton";
import { ModalType } from "../../../hooks/context/ModalContext";
import { ProfileOption } from "../../../types/navigation";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const AccountBottomModal: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <BottomModal modalType={ModalType.Account}>
            <BottomModalTopRow
                headerText={ProfileOption.Account}
                modalType={ModalType.Account}
            />
            <BottomSheetScrollView style={styles.container}>
                <EditProfileButton />
                <ClearHistoryButton />
            </BottomSheetScrollView>
        </BottomModal>
    );
};

export default AccountBottomModal;
