import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dateText: {
            fontSize: theme.font.small,
        },
        headerContentContainer: {
            width: "100%",
            flexDirection: "row",
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.base,
        },
        locationIcon: { height: 24, width: 24 },
        locationInfoContainer: {
            flexDirection: "row",
            paddingBottom: theme.spacing.base / 2,
        },
        locationText: {
            fontSize: theme.font.medium,
            fontWeight: "500",
            paddingLeft: theme.spacing.base / 2,
            alignSelf: "center",
        },
        metadataContainer: {
            flex: 1,
        },
    });
};

export default createStyles;
