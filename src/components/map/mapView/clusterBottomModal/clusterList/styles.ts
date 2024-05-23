import { StyleSheet } from "react-native";

import globalStyles from "../../../../../constants/globalStyles";

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        backgroundColor: "#EAEAEA",
        height: 10,
    },
    flatList: {
        paddingTop: 36,
        backgroundColor: "#EAEAEA",
        paddingHorizontal: globalStyles.bottomSheetModal.paddingHorizontal,
    },
});

export default styles;
