import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    bottomSheetContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    searchBarContainer: {
        alignSelf: "center",
        height: 50,
        width: width * 0.6,
    },
});

export default styles;
