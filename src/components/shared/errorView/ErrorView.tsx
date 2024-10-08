import { Icon } from "@ui-kitten/components";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import createStyles from "./styles";
import TextButton from "../textButton/TextButton";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ErrorViewProps {
    message: string;
    suggestion?: string;
    onRetry?: () => void;
    messageStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    hideSuggestion?: boolean;
}

const ErrorView: React.FC<ErrorViewProps> = ({
    message,
    suggestion = "Check your internet connection",
    onRetry,
    messageStyle,
    containerStyle,
    hideSuggestion = false,
}: ErrorViewProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={containerStyle || styles.container}>
            <Text
                style={[
                    styles.messageText,
                    messageStyle,
                    { paddingBottom: !hideSuggestion ? 10 : undefined },
                ]}
            >
                {message}
            </Text>
            {!hideSuggestion && (
                <Text style={styles.suggestionText}>{suggestion}</Text>
            )}
            {onRetry && (
                <TextButton
                    onPress={onRetry}
                    accessoryLeft={
                        <Icon name="refresh" fill={styles.buttonIcon.color} />
                    }
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
