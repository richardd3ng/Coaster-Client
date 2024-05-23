import { StyleSheet } from "react-native";

import globalStyles from "../../../../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    bottomSheetModal: {
        backgroundColor: globalStyles.common.backgroundColor,
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    preferencesBottomModalTopRow: {
        flexDirection: "row",
        padding: globalStyles.bottomSheetModal.paddingHorizontal,
        backgroundColor: globalStyles.common.backgroundColor,
        borderTopLeftRadius: globalStyles.bottomSheetModal.borderRadius,
        borderTopRightRadius: globalStyles.bottomSheetModal.borderRadius,
    },
});

export default styles;
