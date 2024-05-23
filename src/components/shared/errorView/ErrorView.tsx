import { Icon } from "@ui-kitten/components";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import styles from "./styles";
import TextButton from "../textButton/TextButton";

interface ErrorViewProps {
    message: string;
    suggestion?: string;
    onTryAgain: () => void;
    containerStyle?: StyleProp<ViewStyle>;
}

const ErrorView: React.FC<ErrorViewProps> = ({
    message,
    suggestion = "Check your internet connection",
    onTryAgain,
    containerStyle,
}: ErrorViewProps) => {
    return (
        <View style={[styles.errorContainer, containerStyle]}>
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

export default ErrorView;
