import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            height: theme.size.largeAsset,
            width: theme.size.largeAsset,
            backgroundColor: "lightgray",
            borderRadius: theme.size.largeAsset,
        },
        icon: {
            color: theme.color.primary,
        },
    });
};
export default createStyles;
