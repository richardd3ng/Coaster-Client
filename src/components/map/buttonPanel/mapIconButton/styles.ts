import { StyleSheet } from "react-native";

import { Theme } from "../../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            alignSelf: "flex-start",
            height: 50,
            width: 50,
            backgroundColor: "#FAF9F6",
            borderColor: "gray",
            marginTop: 4,
            borderRadius: theme.border.radiusSecondary,
        },
    });
};

export default createStyles;
