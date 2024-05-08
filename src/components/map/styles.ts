import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bottomSheetContainer: {
        flex: 1,
        width: "100%",
        pointerEvents: "box-none",
    },
    bottomSheetHandle: {
        backgroundColor: "#EAEAEA",
    },
    bottomSheetTopRow: {
        flexDirection: "row",
        verticalAlign: "middle",
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: "#EAEAEA",
    },
    bottomSheetTextInput: {
        paddingRight: 16,
        borderRadius: 10,
    },
    bottomSheetTextInputContainer: {
        alignSelf: "flex-start",
        width: "90%",
    },
    bottomSheetProfileIconButtonContainer: {
        flexDirection: "row",
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
    searchResultsItemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
    searchResultsContentContainer: {
        backgroundColor: "white",
    },
});

export default styles;
