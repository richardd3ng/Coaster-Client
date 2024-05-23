import { useState } from "react";

import ConfirmationDialog from "../../../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../../../types/navigation";
import ToggledListItem from "../toggledListItem/ToggledListItem";
import useThemeAwareObject from "../../../../../../hooks/useThemeAwareObject";

const ShareSnapshots: React.FC = () => {
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
                text={PreferencesOption.ShareSnapshots}
                onPress={handleToggle}
                style={styles.toggledListItem}
                isEnabled={isEnabled}
                hideDivider
            />
            <ConfirmationDialog
                title={"Are you sure you want to disable Snapshot sharing?"}
                description="Your Snapshots will no longer appear in Clusters visible to others. This change may not take effect immediately."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() => setIsEnabled(false)}
            />
        </>
    );
};

export default ShareSnapshots;
