import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            alignSelf: "center",
        },
        moreOptionsIcon: {
            width: 20,
            height: 20,
        },
    });
};

export default createStyles;
