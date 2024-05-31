import { useEffect, useState } from "react";

import { ActivityIndicator, Alert, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { useMutationToDeleteFriend } from "../../../hooks/react-query/useMutationHooks";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface DeleteButtonProps {
    user: User;
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

    useEffect(() => {
        if (isError && error) {
            Alert.alert(error.message);
        }
        reset();
    }, [isError, error]);

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
