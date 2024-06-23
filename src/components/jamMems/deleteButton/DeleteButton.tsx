import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToDeleteFriendFromJamMem } from "../../../hooks/react-query/useMutationHooks";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface DeleteButtonProps {
    jamMemId: number;
    user: User;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
    jamMemId,
    user,
}: DeleteButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const {
        mutate: deleteFriendFromJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToDeleteFriendFromJamMem(jamMemId);
    useMutationErrorAlert({ isError, error, reset });

    return (
        <>
            <View style={styles.container}>
                {isPending ? (
                    <ActivityIndicator />
                ) : (
                    <CloseButton
                        style={styles.button}
                        onPress={() => setShowConfirmation(true)}
                        iconStyle={styles.icon}
                    />
                )}
            </View>
            <ConfirmationDialog
                open={showConfirmation}
                title={`Are you sure you want to remove ${user.displayName} from this Jam Mem?`}
                description="This will remove all of their snapshots from this Jam Mem."
                onClose={() => setShowConfirmation(false)}
                onConfirm={() =>
                    deleteFriendFromJamMem({ jamMemId, userId: user.id })
                }
            />
        </>
    );
};

export default DeleteButton;
