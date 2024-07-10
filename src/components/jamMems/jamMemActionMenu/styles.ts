import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            alignSelf: "center",
        },
        moreOptionsIcon: {
            width: theme.size.xsmallAsset,
            height: theme.size.xsmallAsset,
        },
    });
};

export default createStyles;
