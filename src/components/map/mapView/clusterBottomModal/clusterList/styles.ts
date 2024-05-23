import { StyleSheet } from "react-native";

import globalStyles from "../../../../../constants/theme/globalStyles";

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        backgroundColor: globalStyles.common.backgroundColor,
        height: 10,
    },
    flatList: {
        paddingTop: 36,
        backgroundColor: globalStyles.common.backgroundColor,
        paddingHorizontal: globalStyles.bottomSheetModal.paddingHorizontal,
    },
});

export default styles;
