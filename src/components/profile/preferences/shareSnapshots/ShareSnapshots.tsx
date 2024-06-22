import { useState } from "react";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { CURRENT_USER_ID } from "../../../../constants/defaults";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import useMutationErrorAlert from "../../../../hooks/useMutationErrorAlert";
import { useMutationToUpdateUserPreferences } from "../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import { useUserPreferences } from "../../../../hooks/react-query/useQueryHooks";

const ShareSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const { data: preferences, isLoading } =
        useUserPreferences(CURRENT_USER_ID);
    const {
        mutate: updatePreferences,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToUpdateUserPreferences(CURRENT_USER_ID);
    useMutationErrorAlert({ isError, error, reset });

    const handleToggle = () => {
        if (preferences?.shareSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updatePreferences({
                id: CURRENT_USER_ID,
                shareSnapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updatePreferences({
            id: CURRENT_USER_ID,
            shareSnapshots: false,
        });
    };

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.ShareSnapshots}
                onPress={handleToggle}
                isEnabled={preferences?.shareSnapshots ?? false}
                isPending={isPending || isLoading}
                style={styles.toggledListItem}
                hideDivider
            />
            <ConfirmationDialog
                title={"Are you sure you want to disable Snapshot sharing?"}
                description="Your Snapshots will no longer appear in Clusters visible to others. This change may not take effect immediately."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={handleConfirm}
            />
        </>
    );
};

export default ShareSnapshots;
