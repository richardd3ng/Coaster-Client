import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        image: {
            width: "100%",
            height: "100%",
            position: "absolute",
            borderRadius: theme.border.radiusSecondary,
        },
        imageItemContainer: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
            overflow: "hidden",
            marginLeft: theme.spacing.base,
            marginRight: 6,
        },
        textContainer: {
            flexDirection: "column",
            alignSelf: "flex-start",
        },
        titleText: {
            paddingHorizontal: 4,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            overflow: "hidden",
        },
        placeText: {
            paddingHorizontal: 4,
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            overflow: "hidden",
        },
        dateText: {
            paddingHorizontal: 4,
            paddingBottom: 4,
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            overflow: "hidden",
        },
    });
};

export default createStyles;
