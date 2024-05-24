import { StyleSheet } from "react-native";

import { Theme } from "../../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        artistText: {
            fontSize: theme.font.small,
            color: "gray",
        },
        errorText: {
            color: "gray",
        },
        listItemContainer: {
            paddingLeft: 2,
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: theme.border.radiusSecondary,
            alignItems: "center",
        },
        titleText: {
            fontSize: theme.font.medium,
            fontWeight: "500",
        },
        textContainer: {
            alignItems: "center",
            flex: 9,
        },
        frequencyContainer: {
            alignItems: "center",
            flex: 1,
        },
        frequncyText: {
            fontSize: theme.font.large,
            fontWeight: "bold",
        },
        image: { width: 50, height: 50 },
        imageContainer: {
            padding: 8,
        },
    });
};
export default createStyles;
