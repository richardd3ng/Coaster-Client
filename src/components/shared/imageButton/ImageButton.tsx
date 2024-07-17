import { Button, ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";
import FastImage, {
    ImageStyle as FastImageStyle,
} from "react-native-fast-image";

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
            accessoryLeft={() => (
                <FastImage
                    source={{ uri }}
                    style={
                        (imageStyle as StyleProp<FastImageStyle>) ||
                        (styles.button as StyleProp<FastImageStyle>)
                    }
                />
            )}
            {...buttonProps}
        />
    );
};

export default ImageButton;
