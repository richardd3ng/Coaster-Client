import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            height: theme.size.smallAsset,
            width: theme.size.smallAsset,
            backgroundColor: "lightgray",
            borderRadius: theme.size.smallAsset,
        },
        icon: {
            color: theme.color.primary,
        },
    });
};
export default createStyles;
