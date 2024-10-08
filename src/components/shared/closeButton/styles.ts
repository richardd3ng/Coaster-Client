import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            borderRadius: 30,
            position: "absolute",
            top: 14,
            right: 14,
            backgroundColor: "gainsboro",
        },
        icon: {
            width: theme.size.smallAsset + 2,
            height: theme.size.smallAsset + 2,
        },
    });
};

export default createStyles;
