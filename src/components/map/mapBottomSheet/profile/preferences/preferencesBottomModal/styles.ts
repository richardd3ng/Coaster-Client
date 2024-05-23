import { StyleSheet } from "react-native";

import globalStyles from "../../../../../../constants/globalStyles";

const bottomSheetModalStyles = globalStyles.bottomSheetModal;

const styles = StyleSheet.create({
    bottomSheetModal: {
        backgroundColor: "#EAEAEA",
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    preferencesBottomModalTopRow: {
        flexDirection: "row",
        padding: bottomSheetModalStyles.paddingHorizontal,
        backgroundColor: "#EAEAEA",
        borderTopLeftRadius: bottomSheetModalStyles.borderRadius,
        borderTopRightRadius: bottomSheetModalStyles.borderRadius,
    },
});

export default styles;
