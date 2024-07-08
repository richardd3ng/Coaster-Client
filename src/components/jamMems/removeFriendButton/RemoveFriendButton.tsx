import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToDeleteFriendFromJamMem } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import { useSelecteJamMemId } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface RemoveFriendButtonProps {
    user: UserInfoFragment;
}

const RemoveFriendButton: React.FC<RemoveFriendButtonProps> = ({
    user,
}: RemoveFriendButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const jamMemId = useSelecteJamMemId();
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const {
        mutate: deleteFriendFromJamMem,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToDeleteFriendFromJamMem();
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
                    deleteFriendFromJamMem({ jamMemId, friendId: user._id })
                }
            />
        </>
    );
};

export default RemoveFriendButton;
