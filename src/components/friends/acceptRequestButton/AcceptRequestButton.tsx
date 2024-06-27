import { ActivityIndicator, View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToAcceptRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface AcceptRequestButtonProps {
    user: UserInfo;
}

const AcceptRequestButton: React.FC<AcceptRequestButtonProps> = ({
    user,
}: AcceptRequestButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: acceptRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToAcceptRequest();
    useMutationErrorAlert({ isError, error, reset });

    return (
        <View style={styles.container}>
            {isPending ? (
                <ActivityIndicator />
            ) : (
                <TextButton
                    text="ACCEPT"
                    onPress={() => acceptRequest(user.id)}
                    style={styles.button}
                    textStyle={styles.text}
                />
            )}
        </View>
    );
};

export default AcceptRequestButton;
