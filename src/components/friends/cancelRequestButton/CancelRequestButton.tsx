import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { useMutationToCancelRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useUserId } from "../../../hooks/useUserHooks";

interface CancelRequestButtonProps {
    user: UserInfoFragment;
}

const CancelRequestButton: React.FC<CancelRequestButtonProps> = ({
    user,
}: CancelRequestButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const currentUserId = useUserId();
    const {
        mutate: cancelRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToCancelRequest();
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
                title={`Are you sure you want to delete the friend request sent to ${user.username}?`}
                description={`${user.username} will not see your friend request anymore and will not be notified.`}
                onClose={() => setShowConfirmation(false)}
                onConfirm={() =>
                    cancelRequest({
                        id: currentUserId,
                        friendId: user._id,
                    })
                }
            />
        </>
    );
};

export default CancelRequestButton;
