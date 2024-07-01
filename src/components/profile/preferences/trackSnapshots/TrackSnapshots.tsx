import { useState } from "react";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { dispatchSetCurrentUser } from "../../../../state/storeUtils";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";

const TrackSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const currentUser = useCurrentUser();
    const trackSnapshots = currentUser.preferences.trackSnapshots;

    const setTrackSnapshots = (trackSnapshots: boolean) => {
        dispatchSetCurrentUser({
            ...currentUser,
            preferences: {
                ...currentUser.preferences,
                trackSnapshots,
            },
        });
    };

    const handleToggle = () => {
        if (trackSnapshots) {
            setShowConfirmationDialog(true);
        } else {
            setTrackSnapshots(true);
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
                title={"Are you sure you want to disable Snapshot tracking?"}
                description="This will disable tracking of your location and recently-played songs. Note that the map will still follow your location, but nothing will be recorded."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() => setTrackSnapshots(false)}
            />
        </>
    );
};

export default TrackSnapshots;
