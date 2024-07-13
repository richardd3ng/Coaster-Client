import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            backgroundColor: "lightgray",
            borderWidth: 0,
            width: 205,
        },
        buttonIcon: { color: theme.color.primary },
        buttonText: { color: theme.color.primary },
        messageText: {
            fontWeight: "bold",
        },
        suggestionText: {
            color: "gray",
            paddingBottom: 10,
        },
        errorContainer: {
            position: "absolute",
            top: "12.5%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
        },
    });
};

export default createStyles;
