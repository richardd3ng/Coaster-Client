import { useState } from "react";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { dispatchSetUserLocalData } from "../../../state/storeUtils";

import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import { PreferencesOption } from "../../../types/navigation";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useTrackSnapshots } from "../../../hooks/redux/useSelectorHooks";

export const DISABLE_TRACKING_CONFIRMATION_TITLE =
    "Are you sure you want to disable Snapshot tracking?";

export const DISABLE_TRACKING_CONFIRMATION_DESCRIPTION =
    "This will disable tracking of your location and recently-played songs. The map will still follow your location, but nothing will be recorded.";

const TrackSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const trackSnapshots = useTrackSnapshots();

    const handleToggle = () => {
        if (trackSnapshots) {
            setShowConfirmationDialog(true);
        } else {
            dispatchSetUserLocalData({ trackSnapshots: true });
        }
    };

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.TrackSnapshots}
                onPress={handleToggle}
                isPending={false}
                style={styles.toggledListItem}
                value={trackSnapshots}
            />
            <ConfirmationDialog
                title={DISABLE_TRACKING_CONFIRMATION_TITLE}
                description={DISABLE_TRACKING_CONFIRMATION_DESCRIPTION}
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() =>
                    dispatchSetUserLocalData({ trackSnapshots: false })
                }
            />
        </>
    );
};

export default TrackSnapshots;
