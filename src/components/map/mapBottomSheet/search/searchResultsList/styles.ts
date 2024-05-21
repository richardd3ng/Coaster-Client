import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    divider: { backgroundColor: "gray" },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    locationsText: {
        fontSize: 16,
        paddingLeft: 16,
        paddingVertical: 12,
        color: "gray",
    },
    moreText: {
        fontSize: 16,
        paddingLeft: 16,
        paddingVertical: 12,
        color: "blue",
    },
    moreTextButton: { paddingRight: 16 },
});

export default styles;
