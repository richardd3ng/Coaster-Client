import { useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import { useMutationToLeaveJamMem } from "../../../hooks/react-query/useMutationHooks";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import LoadingModal from "../../shared/loadingModal/LoadingModal";

const LeaveButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmationDialog, setShowConfirmationDialog] =
        useState<boolean>(false);
    const { dismiss, options } = useJamMemModal();
    const userId = useUserId();
    const {
        mutate: leaveJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToLeaveJamMem();
    useMutationErrorToast({ isError, error, reset });
    const selectedJamMemId: string = options?.jamMemId;

    const handleConfirm = () => {
        leaveJamMem(
            {
                jamMemId: selectedJamMemId,
                friendId: userId,
            },
            {
                onSuccess: () => {
                    handleClose();
                    dismiss();
                },
            }
        );
    };

    const handleClose = () => {
        setShowConfirmationDialog(false);
    };

    return (
        <>
            <CustomPressable onPress={() => setShowConfirmationDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="minus-square-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Leave Jam Mem</Text>
                </View>
            </CustomPressable>
            <ConfirmationDialog
                open={showConfirmationDialog}
                onClose={handleClose}
                onConfirm={handleConfirm}
                title="Confirm leave Jam Mem"
                description="Are you sure you want to leave this Jam Mem? You will lose access to the Jam Mem and its snapshots. Other Jam Friends will not be notified."
                preventDefaultConfirm
            >
                <LoadingModal visible={isPending} text="Leaving Jam Mem..." />
            </ConfirmationDialog>
        </>
    );
};
export default LeaveButton;
