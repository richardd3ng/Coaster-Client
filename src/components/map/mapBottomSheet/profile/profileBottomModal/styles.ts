import { StyleSheet } from "react-native";

import globalStyles from "../../../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    bottomSheetModal: {
        backgroundColor: globalStyles.common.backgroundColor,
    },
    bottomSheetModalContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    displayNameText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    profileBottomModalTopRow: {
        flexDirection: "row",
        padding: globalStyles.bottomSheetModal.paddingHorizontal,
        backgroundColor: globalStyles.common.backgroundColor,
        borderTopLeftRadius: globalStyles.bottomSheetModal.borderRadius,
        borderTopRightRadius: globalStyles.bottomSheetModal.borderRadius,
    },
    profileIconButton: {
        height: 50,
        width: 50,
        backgroundColor: "lightgray",
        borderRadius: 25,
    },
    textContainer: {
        paddingLeft: 16,
        justifyContent: "center",
        paddingRight: 32,
    },
    usernameText: {
        fontSize: 16,
        color: "gray",
    },
});

export default styles;
