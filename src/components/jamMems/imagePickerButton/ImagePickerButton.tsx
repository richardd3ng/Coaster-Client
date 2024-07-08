import { Button, Icon } from "@ui-kitten/components";
import ImageCropPicker from "react-native-image-crop-picker";
import { StyleProp, Text, ViewStyle } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ImagePickerButtonProps {
    onImagePicked: (uri: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const ImagePickerButton: React.FC<ImagePickerButtonProps> = ({
    onImagePicked,
    style,
}: ImagePickerButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    const handlePickImage = async () => {
        try {
            const image = await ImageCropPicker.openPicker({
                width: 360,
                height: 450,
                cropping: true,
                mediaType: "photo",
            });
            if (image && image.sourceURL) {
                onImagePicked(image.sourceURL);
            }
        } catch (error) {}
    };

    return (
        <Button
            onPress={handlePickImage}
            appearance="outline"
            accessoryLeft={<Icon name="image" fill={styles.icon.color} />}
            style={[styles.button, style]}
            activeOpacity={0.5}
        >
            {() => <Text style={styles.text}>Cover Image</Text>}
        </Button>
    );
};
