import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            alignSelf: "center",
        },
        icon: {
            width: theme.size.xsmallAsset,
            height: theme.size.xsmallAsset,
            color: theme.color.faded
        },
    });
};

export default createStyles;
