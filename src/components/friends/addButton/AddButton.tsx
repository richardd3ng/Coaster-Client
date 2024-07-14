import { useCallback } from "react";

import { ActivityIndicator, View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useCurrentUser from "../../../hooks/useCurrentUser";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToSendRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface AddButtonProps {
    user: UserInfoFragment;
    onSuccess: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({
    user,
    onSuccess,
}: AddButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const currentUser = useCurrentUser().id;
    const {
        mutate: sendRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToSendRequest();
    useMutationErrorToast({ isError, error, reset });

    const handlePress = useCallback(() => {
        sendRequest(
            {
                id: currentUser,
                friendId: user._id,
            },
            { onSuccess }
        );
    }, []);

    return (
        <View style={styles.container}>
            {isPending ? (
                <ActivityIndicator />
            ) : (
                <TextButton
                    text="ADD"
                    onPress={handlePress}
                    style={styles.button}
                    textStyle={styles.text}
                />
            )}
        </View>
    );
};

export default AddButton;
