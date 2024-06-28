import { useState } from "react";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import useMutationErrorAlert from "../../../../hooks/useMutationErrorAlert";
import { useMutationToUpdateUserPreferences } from "../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import { useUserPreferences } from "../../../../hooks/react-query/useQueryHooks";
import useCurrentUser from "../../../../hooks/useCurrentUser";

const ShareSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const currentUserId = useCurrentUser().id;
    const { data: preferences, isLoading } = useUserPreferences(currentUserId);
    const {
        mutate: updatePreferences,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToUpdateUserPreferences();
    useMutationErrorAlert({ isError, error, reset });

    const handleToggle = () => {
        if (preferences?.shareSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updatePreferences({
                id: currentUserId,
                shareSnapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updatePreferences({
            id: currentUserId,
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
