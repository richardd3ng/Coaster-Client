import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset,
            borderRadius: theme.size.xlargeAsset,
        },
    });
};

export default createStyles;
