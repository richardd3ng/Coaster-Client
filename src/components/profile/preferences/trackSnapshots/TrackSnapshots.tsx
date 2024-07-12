import { useState } from "react";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { dispatchSetCurrentUser } from "../../../../state/storeUtils";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import { UserReduxState } from "../../../../types/entities";

export const DISABLE_TRACKING_CONFIRMATION_TITLE =
    "Are you sure you want to disable Snapshot tracking?";

export const DISABLE_TRACKING_CONFIRMATION_DESCRIPTION =
    "This will disable tracking of your location and recently-played songs. Note that the map will still follow your location, but nothing will be recorded.";

export const setTrackSnapshots = (
    currentUser: UserReduxState,
    trackSnapshots: boolean
) => {
    dispatchSetCurrentUser({
        ...currentUser,
        preferences: {
            ...currentUser.preferences,
            trackSnapshots,
        },
    });
};

const TrackSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const currentUser = useCurrentUser();
    const trackSnapshots = currentUser.preferences.trackSnapshots;

    const handleToggle = () => {
        if (trackSnapshots) {
            setShowConfirmationDialog(true);
        } else {
            setTrackSnapshots(currentUser, true);
        }
    };

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.TrackSnapshots}
                onPress={handleToggle}
                isPending={false}
                style={styles.toggledListItem}
                isEnabled={trackSnapshots}
            />
            <ConfirmationDialog
                title={DISABLE_TRACKING_CONFIRMATION_TITLE}
                description={DISABLE_TRACKING_CONFIRMATION_DESCRIPTION}
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() => setTrackSnapshots(currentUser, false)}
            />
        </>
    );
};

export default TrackSnapshots;
