import { Icon } from "@ui-kitten/components";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import styles from "./styles";
import TextButton from "../textButton/TextButton";

interface ErrorViewProps {
    message: string;
    suggestion?: string;
    onTryAgain?: () => void;
    messageStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    hideSuggestion?: boolean;
}

const ErrorView: React.FC<ErrorViewProps> = ({
    message,
    suggestion = "Check your internet connection",
    onTryAgain,
    messageStyle = styles.messageText,
    containerStyle = styles.errorContainer,
    hideSuggestion = false,
}: ErrorViewProps) => {
    return (
        <View style={containerStyle}>
            <Text style={messageStyle}>{message}</Text>
            {!hideSuggestion && (
                <Text style={styles.suggestionText}>{suggestion}</Text>
            )}
            {onTryAgain && (
                <TextButton
                    onPress={onTryAgain}
                    accessoryLeft={<Icon name="refresh" fill="royalblue" />}
                    size="small"
                    text="Try Again"
                    style={styles.button}
                    activeOpacity={0.8}
                    textStyle={styles.buttonText}
                />
            )}
        </View>
    );
};

export default ErrorView;
