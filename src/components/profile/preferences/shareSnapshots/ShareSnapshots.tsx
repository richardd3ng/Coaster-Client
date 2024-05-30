import { useEffect, useState } from "react";

import { Alert } from "react-native";

import ConfirmationDialog from "../../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { PreferencesOption } from "../../../../types/navigation";
import PreferencesListItem from "../preferencesListItem/PreferencesListItem";
import { useCurrentUser } from "../../../../hooks/react-query/useQueryHooks";
import { useMutationToUpdateUser } from "../../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../../hooks/useThemeAwareObject";

const ShareSnapshots: React.FC = () => {
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

    useEffect(() => {
        if (isError && error) {
            Alert.alert(error.message);
        }
        reset();
    }, [isError]);

    const handleToggle = () => {
        if (currentUser?.shareSnapshots || false) {
            setShowConfirmationDialog(true);
        } else {
            updateCurrentUser({
                shareShapshots: true,
            });
        }
    };

    const handleConfirm = () => {
        updateCurrentUser({
            shareShapshots: false,
        });
    };

    return (
        <>
            <PreferencesListItem
                text={PreferencesOption.ShareSnapshots}
                onPress={handleToggle}
                isEnabled={currentUser?.shareSnapshots ?? false}
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
