import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        width: "100%",
        padding: 24,
        pointerEvents: "box-none",
    },
    bottomSheetContentContainer: {
        flex: 1,
        alignItems: "center",
    },
    bottomSheetTopRow: {
        flexDirection: "row",
        verticalAlign: "middle",
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    bottomSheetTextInput: {
        paddingRight: 16,
    },
    bottomSheetTextInputContainer: {
        alignSelf: "flex-start",
        width: "90%",
    },
    bottomSheetProfileIconButtonContainer: {
        flexDirection: "row",
        width: "10%",
    },
    mapIconButton: {
        alignSelf: "flex-start",
        height: 50,
        width: 50,
        backgroundColor: "#FAF9F6",
        borderColor: "gray",
        marginTop: 4,
    },
    profileIconButton: {
        height: 40,
        width: 40,
        backgroundColor: "gray",
        borderRadius: 25,
    },
});

export default styles;
