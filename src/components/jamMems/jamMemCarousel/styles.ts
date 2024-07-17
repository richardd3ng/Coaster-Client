import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Theme } from "../../../types/theme";

const { width } = Dimensions.get("window");

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        carousel: {
            width: width,
        },
        container: {
            justifyContent: "center",
            alignItems: "center",
            borderColor: theme.color.faded,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: theme.border.radiusSecondary,
            marginHorizontal: theme.spacing.double,
        },
        icon: {
            height: theme.size.xlargeAsset,
            width: theme.size.xlargeAsset,
            color: theme.color.faded,
        },
        text: {
            fontSize: theme.size.mediumFont,
            padding: theme.spacing.base,
            textAlign: "center",
            color: theme.color.faded,
        },
    });
};

export default createStyles;
