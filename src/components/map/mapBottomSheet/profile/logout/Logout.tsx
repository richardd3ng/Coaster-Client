import { useState } from "react";

import ConfirmationDialog from "../../../../shared/confirmationDialog/ConfirmationDialog";
import IconButton from "../../../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../../../types/custom";
import { ScreenName, StackNavigation } from "../../../../../types/navigation";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import useTracking from "../../../../../hooks/useTracking";

const LogoutIcon = (
    <IconButton iconName="log-out" iconColor="black" style={styles.icon} />
);

const Logout: React.FC = () => {
    const { navigate } = useNavigation<StackNavigation>();
    const [_tracking, setTracking] = useTracking();
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);

    const handleLogout = () => {
        setTracking(false);
        navigate(ScreenName.Login);
    };

    return (
        <>
            <ProfileListItem
                text={ProfileOption.Logout}
                onPress={() => setShowConfirmationDialog(true)}
                icon={LogoutIcon}
                hideArrow
                hideDivider
                textColor="red"
                style={styles.profileListItem}
            />
            <ConfirmationDialog
                open={showConfiramtionDialog}
                title="Are you sure you want to log out?"
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={handleLogout}
            />
        </>
    );
};

export default Logout;
