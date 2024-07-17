import { useCallback, useEffect, useState } from "react";

import { Radio, RadioGroup } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { SnapshotRetention } from "../../../gql/graphql";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToUpdatePreferences } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";
import { useUserPreferences } from "../../../hooks/react-query/useQueryHooks";

interface SnapshotRetentionDialogProps {
    open: boolean;
    onClose: () => void;
}

export const retentionOptions = [
    { value: SnapshotRetention.Week, label: "1 Week" },
    { value: SnapshotRetention.Month, label: "1 Month" },
    { value: SnapshotRetention.Year, label: "1 Year" },
] as const;

const SnapshotRetentionDialog: React.FC<SnapshotRetentionDialogProps> = ({
    open,
    onClose,
}: SnapshotRetentionDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const userId = useUserId();
    const { data: preferences } = useUserPreferences(userId);

    const [selectedRetention, setSelectedRetention] =
        useState<SnapshotRetention>(SnapshotRetention.Week);

    const {
        mutate: updatePreferences,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToUpdatePreferences();
    useMutationErrorToast({ isError, error, reset });

    useEffect(() => {
        if (open && preferences) {
            setSelectedRetention(preferences.snapshotRetention);
        }
    }, [open, preferences]);

    const handleConfirm = useCallback(() => {
        if (selectedRetention === preferences?.snapshotRetention) {
            onClose();
            return;
        }
        updatePreferences({
            id: userId,
            record: {
                snapshotRetention: selectedRetention,
            },
        });
        onClose();
    }, [selectedRetention, userId, updatePreferences, onClose]);

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <Text style={styles.descriptionText}>
                Control how long your snapshots are stored on our server. Changes
                may take up to 24 hours to take effect. This setting does not
                apply to Jam Mems.
            </Text>
            <RadioGroup
                selectedIndex={retentionOptions.findIndex(
                    (option) => option.value === selectedRetention
                )}
                onChange={(index) =>
                    setSelectedRetention(retentionOptions[index].value)
                }
            >
                {retentionOptions.map((option, index) => (
                    <Radio key={index}>
                        {() => (
                            <Text style={styles.radioItemText}>
                                {option.label}
                            </Text>
                        )}
                    </Radio>
                ))}
            </RadioGroup>
        </View>
    );

    return (
        <ConfirmationDialog
            title="Snapshot Retention Settings"
            open={open}
            onClose={onClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            sameButtonTextStyle
        >
            {DialogContent}
            <LoadingModal
                visible={isPending}
                text="Updating Retention Settings..."
            />
        </ConfirmationDialog>
    );
};

export default SnapshotRetentionDialog;
