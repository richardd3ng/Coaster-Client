import { useState } from "react";

import { Icon } from "@ui-kitten/components";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { useMutationToPostSnapshots } from "../../../hooks/react-query/useMutationHooks";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const SnapshotButton = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const {
        mutate: postSnapshots,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToPostSnapshots();
    useMutationErrorToast({ isError, error, reset });

    const handleConfirm = () => {
        postSnapshots(void 0, {
            onSuccess: () => setShowConfirmationDialog(false),
        });
    };

    return (
        <>
            <CustomPressable onPress={() => setShowConfirmationDialog(true)}>
                <Icon
                    name="camera"
                    fill={styles.icon.color}
                    style={styles.icon}
                />
            </CustomPressable>
            <ConfirmationDialog
                title="Take Manual Snapshot"
                description="Are you sure you want to take a manual snapshot? Snapshots are taken automatically when your location history spans at least 30 minutes."
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={handleConfirm}
                preventDefaultConfirm
            >
                <LoadingModal visible={isPending} text="Taking Snapshots..." />
            </ConfirmationDialog>
        </>
    );
};

export default SnapshotButton;
