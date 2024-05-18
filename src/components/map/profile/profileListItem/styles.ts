import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        alignItems: "center",
    },
    divider: { backgroundColor: "gray", marginLeft: 64 },
    text: {
        fontSize: 16,
        paddingLeft: 16,
        flex: 1,
    },
});

export default styles;
