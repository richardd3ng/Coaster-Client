import React from "react";
import { Button, ButtonProps } from "@ui-kitten/components";
import { Image, ImageStyle, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";

interface ImageButtonProps extends ButtonProps {
    uri: string;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ImageButton: React.FC<ImageButtonProps> = ({
    uri,
    style = styles.button,
    imageStyle = styles.button,
    ...buttonProps
}) => (
    <Button
        style={style}
        appearance="ghost"
        accessoryLeft={() => <Image source={{ uri }} style={imageStyle} />}
        {...buttonProps}
    />
);

export default ImageButton;
