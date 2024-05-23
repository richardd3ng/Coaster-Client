import { StyleSheet } from "react-native";

import globalStyles from "../../../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    addressText: {
        fontSize: 14,
    },
    divider: { backgroundColor: "gray", marginLeft: 72 },
    listItemContainer: {
        flexDirection: "row",
        backgroundColor: globalStyles.common.backgroundColor,
        paddingHorizontal: globalStyles.bottomSheetModal.paddingHorizontal,
        paddingVertical: 12,
    },
    placeText: {
        fontSize: 16,
    },
    textContainer: {
        paddingLeft: 16,
        justifyContent: "center",
        paddingRight: 32,
    },
});

export default styles;
