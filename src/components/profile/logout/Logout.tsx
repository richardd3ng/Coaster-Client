import { useState } from "react";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import useLogout from "../../../hooks/useLogout";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const Logout: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmationDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const { handleLogout } = useLogout();

    const LogoutIcon = (
        <IconButton iconName="log-out" iconColor="black" style={styles.icon} />
    );

    return (
        <>
            <ProfileListItem
                text={ProfileOption.Logout}
                onPress={() => setShowConfirmationDialog(true)}
                icon={LogoutIcon}
                hideArrow
                hideDivider
                textColor="crimson"
                containerStyle={styles.profileListItem}
            />
            <ConfirmationDialog
                open={showConfirmationDialog}
                title="Are you sure you want to log out?"
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={handleLogout}
            />
        </>
    );
};

export default Logout;
