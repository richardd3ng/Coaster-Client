import React from "react";

import { ButtonProps, Icon, IconProps } from "@ui-kitten/components";

import styles from "./styles";
import CustomPressable from "../customPressable/CustomPressable";

const CloseIcon = (props: IconProps) => (
    <Icon
        {...props}
        style={[props.style, styles.icon]}
        fill="gray"
        name="close"
    />
);

const CloseButton: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    return (
        <CustomPressable
            onPress={props.onPress}
            style={[styles.button, props.style]}
        >
            <CloseIcon />
        </CustomPressable>
    );
};

export default CloseButton;
