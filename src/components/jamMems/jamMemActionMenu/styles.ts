import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            alignSelf: "center",
        },
        icon: {
            width: theme.size.mediumAsset - 3,
            height: theme.size.mediumAsset - 3,
            color: theme.color.faded,
        },
    });
};

export default createStyles;
