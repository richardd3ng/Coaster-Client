import { useState } from "react";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import useCurrentUser from "../../../../hooks/useCurrentUser";
import useMutationErrorAlert from "../../../../hooks/useMutationErrorAlert";
import { useMutationToUpdateUserPreferences } from "../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";
import { useUserPreferences } from "../../../../hooks/react-query/useQueryHooks";

const TrackSnapshots: React.FC = () => {
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
        if (preferences?.trackSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updatePreferences({
                id: currentUserId,
                trackSnapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updatePreferences({
            id: currentUserId,
            trackSnapshots: false,
        });
    };

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.TrackSnapshots}
                onPress={handleToggle}
                isPending={isLoading || isPending}
                style={styles.toggledListItem}
                isEnabled={preferences?.trackSnapshots ?? false}
            />
            <ConfirmationDialog
                title={"Are you sure you want to disable Snapshot tracking?"}
                description="This will disable tracking of your location and recently-played songs."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={handleConfirm}
            />
        </>
    );
};

export default TrackSnapshots;
