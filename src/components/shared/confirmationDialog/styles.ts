import { StyleSheet } from "react-native";

import globalStyles from "../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "gray",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    cancelButton: {
        backgroundColor: globalStyles.common.backgroundColor,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        flex: 1,
        borderColor: globalStyles.common.backgroundColor,
    },
    confirmButton: {
        backgroundColor: globalStyles.common.backgroundColor,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        flex: 1,
        borderColor: globalStyles.common.backgroundColor,
    },
    textContainer: {
        paddingHorizontal: 16,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 16,
    },
    descriptionText: {
        paddingTop: 10,
        fontSize: 14,
    },
    cancelText: {
        color: "#007AFF",
        fontWeight: "500",
    },
    confirmText: {
        color: "red",
        fontWeight: "300",
    },
    dialog: {
        width: 300,
        paddingTop: 15,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: globalStyles.common.backgroundColor,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    horizontalDivider: {
        marginTop: 15,
        backgroundColor: "black",
        width: "100%",
    },
    verticalDivider: {
        backgroundColor: "black",
        width: StyleSheet.hairlineWidth,
        height: "100%",
    },
});

export default styles;
