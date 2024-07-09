import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
        },
        container: {
            paddingRight: theme.spacing.base,
        },
        icon: { height: theme.size.smallAsset, width: theme.size.smallAsset },
    });
};
export default createStyles;
