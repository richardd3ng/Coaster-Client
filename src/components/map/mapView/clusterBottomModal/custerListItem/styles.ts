import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    artistText: {
        fontSize: 14,
        color: "gray",
    },
    listItemContainer: {
        paddingLeft: 2,
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    titleText: {
        fontSize: 16,
        fontWeight: "500",
    },
    textContainer: {
        justifyContent: "center",
        flex: 9,
    },
    frequencyContainer: {
        flex: 1,
        alignItems: "center",
    },
    frequncyText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    image: { width: 50, height: 50 },
    imageContainer: {
        padding: 8,
    },
});

export default styles;
