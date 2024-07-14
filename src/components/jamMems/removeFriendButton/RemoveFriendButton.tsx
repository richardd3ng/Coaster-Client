import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToDeleteFriendFromJamMem } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface RemoveFriendButtonProps {
    user: UserInfoFragment;
}

const RemoveFriendButton: React.FC<RemoveFriendButtonProps> = ({
    user,
}: RemoveFriendButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {value: jamMemId} = useJamMemModal();
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const {
        mutate: deleteFriendFromJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToDeleteFriendFromJamMem();
    useMutationErrorToast({ isError, error, reset });

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
                description={`This Jam Mem will no longer appear in ${user.displayName}'s shared Jam Mems anymore. Snapshots will not be removed because the original snapshots from that friend may not exist anymore.`}
                onClose={() => setShowConfirmation(false)}
                onConfirm={() =>
                    deleteFriendFromJamMem({ jamMemId, friendId: user._id })
                }
            />
        </>
    );
};

export default RemoveFriendButton;
