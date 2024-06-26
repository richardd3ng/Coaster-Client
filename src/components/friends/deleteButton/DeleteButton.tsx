import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { useMutationToDeleteFriend } from "../../../hooks/react-query/useMutationHooks";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";

interface DeleteButtonProps {
    user: UserInfo;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
    user,
}: DeleteButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const {
        mutate: deleteFriend,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToDeleteFriend();
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
                title={`Are you sure you want to remove ${user.displayName} from your friends?`}
                description={`You will no longer be able to add each other to Jam Mems. If you added ${user.displayName} to a Jam Mem you created, they will be removed, and vice versa.`}
                onClose={() => setShowConfirmation(false)}
                onConfirm={() => deleteFriend(user.id)}
            />
        </>
    );
};

export default DeleteButton;
