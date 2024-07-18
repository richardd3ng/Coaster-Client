import { StyleSheet } from "react-native";

import { JAM_MEM_COVER_ASPECT_RATIO } from "../../../constants/size";
import { Theme } from "../../../types/theme";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        datepicker: {
            borderColor: theme.color.primary,
        },
        datepickerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: theme.spacing.base,
        },
        dateText: {
            color: theme.color.faded,
            fontSize: theme.size.mediumFont,
            paddingLeft: theme.spacing.double,
        },
        dialogContainer: {
            paddingVertical: theme.spacing.base,
        },
        dropdownContainer: {
            marginVertical: theme.spacing.base,
            flexDirection: "row",
        },
        errorText: {
            color: theme.color.danger,
            paddingVertical: theme.spacing.base,
        },
        imagePickerButton: {
            flex: 1,
            height: theme.size.largeAsset,
            marginLeft: theme.spacing.base,
        },
        image: {
            width: theme.size.xlargeAsset,
            height: theme.size.xlargeAsset * JAM_MEM_COVER_ASPECT_RATIO,
        },
        imagePickerContainer: {
            paddingTop: theme.spacing.base,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        nameInput: {
            flexDirection: "row",
            paddingVertical: theme.spacing.base,
        },
        locationInput: {
            flexDirection: "row",
            paddingBottom: theme.spacing.base,
        },
    });
};

export default createStyles;
