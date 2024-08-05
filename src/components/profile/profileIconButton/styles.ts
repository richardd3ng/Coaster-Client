import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        image: {
            height: theme.size.largeAsset,
            width: theme.size.largeAsset,
            borderRadius: theme.size.largeAsset,
        },
    });
};
export default createStyles;
