import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        cancelContainer: {
            justifyContent: "center",
            paddingLeft: theme.spacing.base,
        },
        closeIconContainer: {
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "red",
        },
        container: {
            flexDirection: "row",
            width: "100%",
        },
        input: {
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            borderRadius: theme.border.radiusSecondary,
        },
        icon: {
            height: theme.size.xsmallAsset,
            width: theme.size.xsmallAsset,
        },
    });
};

export default createStyles;
