import { StyleSheet } from "react-native";

import { BOTTOM_SHEET_MODAL_PADDING } from "../../../../../constants/globalStyles";

const styles = StyleSheet.create({
    addressText: {
        fontSize: 14,
    },
    divider: { backgroundColor: "gray", marginLeft: 72 },
    listItemContainer: {
        flexDirection: "row",
        backgroundColor: "#EAEAEA",
        paddingHorizontal: BOTTOM_SHEET_MODAL_PADDING,
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
