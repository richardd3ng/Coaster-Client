import { useState } from "react";

import { ActivityIndicator, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { useMutationToIgnoreRequest } from "../../../hooks/react-query/useMutationHooks";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

interface IgnoreRequestButtonProps {
    user: UserInfoFragment;
}

const IgnoreRequestButton: React.FC<IgnoreRequestButtonProps> = ({
    user,
}: IgnoreRequestButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const currentUserId = useUserId();
    const {
        mutate: ignoreRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToIgnoreRequest();
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
                title={`Are you sure you want to ignore ${user.username}'s friend request?`}
                description={`${user.username} will not see their friend request anymore and will not be notified.`}
                onClose={() => setShowConfirmation(false)}
                onConfirm={() =>
                    ignoreRequest({
                        id: currentUserId,
                        friendId: user._id,
                    })
                }
            />
        </>
    );
};

export default IgnoreRequestButton;
