import React from "react";

import { ButtonProps, Icon } from "@ui-kitten/components";

import styles from "./styles";
import CustomPressable from "../customPressable/CustomPressable";
import { StyleProp, ViewStyle } from "react-native";

interface CloseIconProps {
    iconStyle: StyleProp<ViewStyle>;
}

const CloseIcon: React.FC<CloseIconProps> = ({
    iconStyle,
}: CloseIconProps) => <Icon style={iconStyle} fill="gray" name="close" />;

interface CloseButtonProps extends ButtonProps {
    iconStyle?: StyleProp<ViewStyle>;
}

const CloseButton: React.FC<CloseButtonProps> = ({
    iconStyle = styles.icon,
    ...props
}: CloseButtonProps) => {
    return (
        <CustomPressable
            onPress={props.onPress}
            style={props.style || styles.button}
        >
            <CloseIcon iconStyle={iconStyle} />
        </CustomPressable>
    );
};

export default CloseButton;
