import { View } from "react-native";

import createStyles from "./styles";
import BottomModal from "../../shared/bottomModal/BottomModal";
import BottomModalTopRow from "../../shared/bottomModalTopRow/BottomModalTopRow";
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
            <View style={styles.container}>
                <EditProfileButton />
            </View>
        </BottomModal>
    );
};

export default AccountBottomModal;
