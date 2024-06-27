import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        text: {
            fontSize: theme.font.medium,
            color: "gray",
            fontWeight: "bold",
        },
    });
};

export default createStyles;
