import { useCallback, useEffect, useState } from "react";

import { Radio, RadioGroup } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { SnapshotPrivacy } from "../../../gql/graphql";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToUpdatePreferences } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";
import { useUserPreferences } from "../../../hooks/react-query/useQueryHooks";

interface SnapshotPrivacyDialogProps {
    open: boolean;
    onClose: () => void;
}

export const privacyOptions = [
    { value: SnapshotPrivacy.Me, label: "Just Me" },
    { value: SnapshotPrivacy.Friends, label: "Friends Only" },
    { value: SnapshotPrivacy.Everyone, label: "Everyone" },
] as const;

const SnapshotPrivacyDialog: React.FC<SnapshotPrivacyDialogProps> = ({
    open,
    onClose,
}: SnapshotPrivacyDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const userId = useUserId();
    const { data: preferences } = useUserPreferences(userId);

    const [selectedPrivacy, setSelectedPrivacy] = useState<SnapshotPrivacy>(
        SnapshotPrivacy.Me
    );
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
            setSelectedPrivacy(preferences.snapshotPrivacy);
        }
    }, [open, preferences]);

    const handleConfirm = useCallback(() => {
        if (selectedPrivacy === preferences?.snapshotPrivacy) {
            onClose();
            return;
        }
        updatePreferences(
            {
                id: userId,
                record: {
                    snapshotPrivacy: selectedPrivacy,
                },
            },
            {
                onSuccess: onClose,
            }
        );
    }, [selectedPrivacy, userId, updatePreferences, onClose]);

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <Text style={styles.descriptionText}>
                Control who can see your snapshots. Changes may not be immediate
                for other users. All snapshots are anonymous on the map, so we
                encourage you to share with everyone so the map looks cooler!
            </Text>
            <RadioGroup
                selectedIndex={privacyOptions.findIndex(
                    (option) => option.value === selectedPrivacy
                )}
                onChange={(index) =>
                    setSelectedPrivacy(privacyOptions[index].value)
                }
            >
                {privacyOptions.map((option, index) => (
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
            title="Snapshot Privacy Settings"
            open={open}
            onClose={onClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            sameButtonTextStyle
        >
            {DialogContent}
            <LoadingModal
                visible={isPending}
                text="Updating Privacy Settings..."
            />
        </ConfirmationDialog>
    );
};

export default SnapshotPrivacyDialog;
