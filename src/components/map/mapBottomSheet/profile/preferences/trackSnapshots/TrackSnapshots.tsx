import { useState } from "react";

import ConfirmationDialog from "../../../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../../../types/navigation";
import ToggledListItem from "../toggledListItem/ToggledListItem";
import useThemeAwareObject from "../../../../../../hooks/useThemeAwareObject";

const TrackSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
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
