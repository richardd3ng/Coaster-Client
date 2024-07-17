import { ActivityIndicator, View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToAcceptRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

interface AcceptRequestButtonProps {
    user: UserInfoFragment;
}

const AcceptRequestButton: React.FC<AcceptRequestButtonProps> = ({
    user,
}: AcceptRequestButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const currentUserId = useUserId();
    const {
        mutate: acceptRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToAcceptRequest();
    useMutationErrorToast({ isError, error, reset });

    return (
        <View style={styles.container}>
            {isPending ? (
                <ActivityIndicator />
            ) : (
                <TextButton
                    text="ACCEPT"
                    onPress={() =>
                        acceptRequest({
                            id: currentUserId,
                            friendId: user._id,
                        })
                    }
                    style={styles.button}
                    textStyle={styles.text}
                />
            )}
        </View>
    );
};

export default AcceptRequestButton;
