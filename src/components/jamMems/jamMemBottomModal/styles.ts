import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        dateText: {
            fontSize: theme.size.mediumFont,
        },
        headerContentContainer: {
            width: "100%",
            flexDirection: "row",
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.base,
        },
        locationIcon: {
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
        },
        locationInfoContainer: {
            flexDirection: "row",
            paddingBottom: theme.spacing.base / 2,
        },
        locationText: {
            fontSize: theme.size.largeFont,
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
