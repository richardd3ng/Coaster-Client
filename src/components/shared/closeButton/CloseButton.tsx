import React from "react";

import { Button, ButtonProps, Icon } from "@ui-kitten/components";

import styles from "./styles";

const CloseButton: React.FC<ButtonProps> = ({ ...props }: ButtonProps) => {
    return (
        <Button
            accessoryLeft={<Icon name={"close"} fill="gray" />}
            appearance="ghost"
            onPress={props.onPress}
            style={[styles.button, props.style]}
            {...props}
        />
    );
};

export default CloseButton;
