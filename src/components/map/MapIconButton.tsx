import { Button, Icon, IconElement } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

interface MapIconButtonProps {
    onPress: () => void;
}

const StarIcon = (props: any): IconElement => <Icon {...props} name="star" />;

const MapIconButton = (props: MapIconButtonProps) => {
    return (
        <Button
            style={customStyles.button}
            appearance="ghost"
            accessoryLeft={StarIcon}
            onPress={props.onPress}
        />
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
