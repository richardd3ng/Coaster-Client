import { StyleSheet } from "react-native";
import globalStyles from "../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    cancelText: {
        fontSize: 16,
        color: "blue",
    },
    bottomSheetContentContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: globalStyles.common.backgroundColor,
    },
    bottomSheetHandle: {
        backgroundColor: globalStyles.common.backgroundColor,
        borderTopRightRadius: globalStyles.bottomSheetModal.borderRadius,
        borderTopLeftRadius: globalStyles.bottomSheetModal.borderRadius,
    },
    bottomSheetTextInput: {
        paddingRight: 12,
        borderRadius: 10,
    },
    bottomSheetTopRow: {
        flexDirection: "row",
        verticalAlign: "middle",
        paddingHorizontal: globalStyles.bottomSheetModal.paddingHorizontal,
        paddingBottom: 24,
        backgroundColor: globalStyles.common.backgroundColor,
    },
    cancelButton: {
        alignSelf: "center",
    },
    errorContainer: {
        top: "7.5%",
    },
    gestureHandlerRootView: {
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    loadingContainer: {
        top: "7.5%",
    },
    headerText: {
        color: "#6E6E6E",
        fontSize: 16,
        paddingHorizontal: globalStyles.bottomSheetModal.paddingHorizontal,
        paddingBottom: globalStyles.bottomSheetModal.paddingHorizontal / 2,
    },
    jamSessionStack: {
        flex: 1,
        paddingTop: 20, // only show top row when at snap index 0, space feels a bit awkward tho
        flexDirection: "column",
        width: "100%",
    },
    profileIconButton: {
        height: 40,
        width: 40,
        backgroundColor: "lightgray",
        borderRadius: 20,
    },
});

export default styles;
