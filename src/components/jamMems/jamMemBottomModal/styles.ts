import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        headerContentContainer: {},
        icon: { height: 24, width: 24 },
        locationInfoContainer: {
            flexDirection: "row",
            paddingVertical: theme.spacing.base / 2,
        },
        locationText: {
            fontSize: theme.font.medium,
            fontWeight: "500",
            paddingLeft: theme.spacing.base / 2,
            alignSelf: "center",
        },
        dateText: {
            fontSize: theme.font.small,
        },
    });
};

export default createStyles;
