import { ActivityIndicator, View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useCurrentUser from "../../../hooks/useCurrentUser";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToAcceptRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface AcceptRequestButtonProps {
    user: UserInfoFragment;
}

const AcceptRequestButton: React.FC<AcceptRequestButtonProps> = ({
    user,
}: AcceptRequestButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const currentUserId = useCurrentUser().id;
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
