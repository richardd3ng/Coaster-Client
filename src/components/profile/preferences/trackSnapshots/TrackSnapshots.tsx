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

const TrackSnapshots: React.FC = () => {
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
        if (preferences?.trackSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updatePreferences({
                id: CURRENT_USER_ID,
                trackSnapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updatePreferences({
            id: CURRENT_USER_ID,
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
