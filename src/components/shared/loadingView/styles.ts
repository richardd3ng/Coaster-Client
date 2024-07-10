import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        loadingContainer: {
            position: "absolute",
            top: "12.5%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
        },
        spinner: {
            height: theme.size.mediumAsset,
            width: theme.size.mediumAsset,
        },
        text: { color: "gray" },
    });
};

export default createStyles;
