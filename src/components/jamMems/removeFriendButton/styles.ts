import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-end",
        },
        container: {
            flex: 1,
            alignItems: "flex-end",
            paddingRight: theme.spacing.base,
        },
        icon: { height: theme.size.xsmallAsset, width: theme.size.xsmallAsset },
    });
};
export default createStyles;