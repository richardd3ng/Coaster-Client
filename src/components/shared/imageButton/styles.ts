import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            width: theme.size.largeAsset,
            height: theme.size.largeAsset,
            borderRadius: theme.size.largeAsset,
        },
    });
};

export default createStyles;
