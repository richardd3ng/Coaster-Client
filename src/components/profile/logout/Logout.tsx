import { useState } from "react";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ProfileListItem from "../profileListItem/ProfileListItem";
import { ProfileOption } from "../../../types/navigation";
import { ScreenName, StackNavigation } from "../../../types/navigation";
import { useNavigation } from "@react-navigation/native";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useTracking from "../../../hooks/useTracking";

const Logout: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { navigate } = useNavigation<StackNavigation>();
    const [_tracking, setTracking] = useTracking();
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);

    const LogoutIcon = (
        <IconButton iconName="log-out" iconColor="black" style={styles.icon} />
    );

    const handleLogout = () => {
        // todo: invalidate queries but don't refetch
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
                textColor="crimson"
                containerStyle={styles.profileListItem}
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
