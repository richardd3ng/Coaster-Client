import { Button, Icon } from "@ui-kitten/components";
import ImageCropPicker from "react-native-image-crop-picker";
import { Alert, StyleProp, Text, ViewStyle } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ImagePickerButtonProps {
    title: string;
    onImagePicked: (uri: string) => void;
    style?: StyleProp<ViewStyle>;
    cropperCircleOverlay?: boolean;
    freeStyleCropEnabled?: boolean;
    width?: number;
    height?: number;
}

export const ImagePickerButton: React.FC<ImagePickerButtonProps> = ({
    title,
    onImagePicked,
    style,
    cropperCircleOverlay,
    freeStyleCropEnabled,
    width,
    height,
}: ImagePickerButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    const handlePickImage = async () => {
        try {
            const image = await ImageCropPicker.openPicker({
                width,
                height,
                cropping: true,
                mediaType: "photo",
                cropperCircleOverlay,
                freeStyleCropEnabled,
            });
            if (image && image.path) {
                onImagePicked(image.path);
            }
        } catch (error: any) {
            if (error.message === "User did not grant library permission.") {
                Alert.alert(
                    "Permission required",
                    "Please allow access to your gallery to pick an image."
                );
            }
        }
    };

    return (
        <Button
            onPress={handlePickImage}
            appearance="outline"
            accessoryLeft={<Icon name="image" fill={styles.icon.color} />}
            style={[styles.button, style]}
            activeOpacity={0.5}
        >
            {() => <Text style={styles.text}>{title}</Text>}
        </Button>
    );
};
