import { useCallback } from "react";

import { ActivityIndicator, View } from "react-native";

import createStyles from "./styles";
import TextButton from "../../shared/textButton/TextButton";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import { useMutationToSendRequest } from "../../../hooks/react-query/useMutationHooks";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface AddButtonProps {
    user: UserInfo;
    onSuccess: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({
    user,
    onSuccess,
}: AddButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: sendRequest,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToSendRequest();
    useMutationErrorAlert({ isError, error, reset });

    const handlePress = useCallback(() => {
        sendRequest(user.id, { onSuccess });
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
