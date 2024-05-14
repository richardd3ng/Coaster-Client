import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        width: "100%",
    },
    gestureHandlerRootView: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        pointerEvents: "box-none",
    },
    profileBottomModalTopRow: {
        flexDirection: "row",
        padding: 16,
        backgroundColor: "#EAEAEA",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    profileIconButton: {
        height: 50,
        width: 50,
        backgroundColor: "gray",
        borderRadius: 25,
    },
    profileListItemContainer: {
        flexDirection: "row",
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        alignItems: "center",
    },
    profileListItemDivider: { backgroundColor: "gray", marginLeft: 64 },
    profileBottomSheetFlatList: {
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 42,
    },
});

export default styles;
