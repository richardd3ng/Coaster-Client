import { Button, ButtonProps } from "@ui-kitten/components";
import { Image, ImageStyle, StyleProp, ViewStyle } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ImageButtonProps extends ButtonProps {
    uri: string;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ImageButton: React.FC<ImageButtonProps> = ({
    uri,
    style,
    imageStyle,
    ...buttonProps
}: ImageButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <Button
            style={style || styles.button}
            appearance="ghost"
            accessoryLeft={
                <Image source={{ uri }} style={imageStyle || styles.button} />
            }
            {...buttonProps}
        />
    );
};

export default ImageButton;
