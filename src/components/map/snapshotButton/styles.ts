import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            height: theme.size.largeAsset,
            width: theme.size.largeAsset,
            color: "black",
        },
    });
};

export default createStyles;
