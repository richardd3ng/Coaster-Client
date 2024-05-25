import { useEffect, useState } from "react";

import { Alert } from "react-native";

import ConfirmationDialog from "../../../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/ToggledListItem";
import { useCurrentUser } from "../../../../../../hooks/react-query/useQueryHooks";
import { useMutationToUpdateUser } from "../../../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../../../hooks/useThemeAwareObject";

const TrackSnapshots: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const { data: currentUser, isLoading } = useCurrentUser();
    const {
        mutate: updateCurrentUser,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToUpdateUser();

    /* refactor into hook */
    useEffect(() => {
        if (isError && error) {
            Alert.alert(error.message);
        }
        reset();
    }, [isError]);

    const handleToggle = () => {
        if (currentUser?.trackSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updateCurrentUser({
                trackSnapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updateCurrentUser({
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
                isEnabled={currentUser?.trackSnapshots ?? false}
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
