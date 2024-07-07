import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        cancelText: {
            fontSize: theme.font.medium,
            color: "blue",
        },
        cancelButton: {
            alignSelf: "center",
        },
    });
};

export default createStyles;
