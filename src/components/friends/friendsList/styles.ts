import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1 
        },
        divider: {
            width: "100%",
            backgroundColor: theme.color.background,
            height: 10,
        },
        flatList: {
            backgroundColor: theme.color.background,
            paddingHorizontal: theme.spacing.double,
        },
        text: {
            padding: theme.spacing.double,
            fontSize: theme.font.medium
        }
    });
};

export default createStyles;
