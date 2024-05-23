import { StyleSheet } from "react-native";

import { Theme } from "../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            marginTop: theme.spacing.double,
            fontSize: theme.font.large,
            color: "#000",
        },
    });
};

export default createStyles;
