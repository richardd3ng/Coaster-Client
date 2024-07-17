import { StyleSheet } from "react-native";

import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        headerText: {
            color: theme.color.faded,
            fontSize: theme.size.xlargeFont,
            paddingHorizontal: theme.spacing.double,
            paddingBottom: theme.spacing.double,
        },
        myJamMemsText: {
            color: theme.color.faded,
            fontSize: theme.size.mediumFont,
            paddingHorizontal: theme.spacing.double,
        },
        sharedJamMemsText: {
            color: theme.color.faded,
            fontSize: theme.size.mediumFont,
            paddingTop: theme.spacing.double,
            paddingBottom: theme.spacing.base,
            paddingHorizontal: theme.spacing.double,
        },
        jamSessionStack: {
            flex: 1,
            paddingTop: 20, // only show top row when at snap index 0, space feels a bit awkward tho
            width: "100%",
        },
    });
};

export default createStyles;
