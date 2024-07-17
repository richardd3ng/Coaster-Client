import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            backgroundColor: "lightgray",
            borderWidth: 0,
            width: "50%",
        },
        buttonIcon: { color: theme.color.primary },
        buttonText: { color: theme.color.primary },
        container: {
            justifyContent: "center",
            alignItems: "center",
        },
        messageText: {
            fontWeight: "bold",
        },
        suggestionText: {
            color: theme.color.faded,
            paddingBottom: 10,
        },
    });
};

export default createStyles;
