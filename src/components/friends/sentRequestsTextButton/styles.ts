import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        text: {
            fontSize: theme.size.mediumFont,
            color: "gray",
            fontWeight: "bold",
        },
    });
};

export default createStyles;
