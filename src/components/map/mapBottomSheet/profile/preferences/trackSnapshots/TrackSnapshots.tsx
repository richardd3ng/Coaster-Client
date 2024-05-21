import { useState } from "react";

import ConfirmationDialog from "../../../../../shared/confirmationDialog/ConfirmationDialog";
import { PreferencesOption } from "../../../../../../types/custom";
import styles from "./styles";
import ToggledListItem from "../toggledListItem/ToggledListItem";

const TrackSnapshots: React.FC = () => {
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    const handleToggle = () => {
        if (isEnabled) {
            setShowConfirmationDialog(true);
        } else {
            setIsEnabled(true);
        }
    };

    return (
        <>
            <ToggledListItem
                text={PreferencesOption.TrackSnapshots}
                onPress={handleToggle}
                style={styles.toggledListItem}
                isEnabled={isEnabled}
            />
            <ConfirmationDialog
                title={"Are you sure you want to disable Snapshot tracking?"}
                description="This will disable tracking of your location and recently-played songs."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() => setIsEnabled(false)}
            />
        </>
    );
};

export default TrackSnapshots;
