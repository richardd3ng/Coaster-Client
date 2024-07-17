import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        loadingContainer: {
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
