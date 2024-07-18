import { StyleSheet } from "react-native";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        icon: {
            height: theme.size.xlargeAsset,
            width: theme.size.xlargeAsset,
            color: "black",
        },
    });
};

export default createStyles;
