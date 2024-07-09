import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            backgroundColor: "lightgray",
            color: "black",
            width: theme.size.mediumAsset,
            height: theme.size.mediumAsset,
            borderRadius: theme.size.mediumAsset,
        },
    });
};

export default createStyles;
