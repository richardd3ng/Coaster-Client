import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            borderRadius: theme.size.largeAsset,
        },
        icon: {
            width: theme.size.smallAsset,
            height: theme.size.smallAsset,
        },
    });
};

export default createStyles;
