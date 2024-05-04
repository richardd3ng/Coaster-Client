import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface MapIconButtonProps {
    onPress: () => void;
}

const MapIconButton = (props: MapIconButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={customStyles.button}>
            <Text style={customStyles.buttonText}>Recenter</Text>
        </TouchableOpacity>
    );
};

const customStyles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
    },
});

export default MapIconButton;
