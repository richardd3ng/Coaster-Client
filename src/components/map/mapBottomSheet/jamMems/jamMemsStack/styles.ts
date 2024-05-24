import { StyleSheet } from "react-native";

import { Theme } from "../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        errorContainer: {
            top: "7.5%",
        },
        loadingContainer: {
            top: "7.5%",
        },
        headerText: {
            color: "#6E6E6E",
            fontSize: theme.font.medium,
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.base,
        },
        jamSessionStack: {
            flex: 1,
            paddingTop: 20, // only show top row when at snap index 0, space feels a bit awkward tho
            flexDirection: "column",
            width: "100%",
        },
    });
};

export default createStyles;
