import { Text, View } from "react-native";
import styles from "./styles";
import { Icon } from "@ui-kitten/components";
import TextButton from "../textButton/TextButton";

interface BottomModalErrorProps {
    message: string;
    suggestion?: string;
    onTryAgain: () => void;
}

const BottomModalError: React.FC<BottomModalErrorProps> = ({
    message,
    suggestion = "Check your internet connection",
    onTryAgain,
}: BottomModalErrorProps) => {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>{message}</Text>
            <Text style={styles.suggestionText}>{suggestion}</Text>
            <TextButton
                onPress={onTryAgain}
                accessoryLeft={<Icon name="refresh" fill="royalblue" />}
                size="small"
                text="Try Again"
                style={styles.button}
                activeOpacity={0.8}
                textStyle={styles.buttonText}
            />
        </View>
    );
};

export default BottomModalError;
