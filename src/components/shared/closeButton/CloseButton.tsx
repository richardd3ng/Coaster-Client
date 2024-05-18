import React from "react";

import { Button, ButtonProps, Icon } from "@ui-kitten/components";
import styles from "./styles";

const CloseButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <Button
            style={[styles.button, props.style]}
            appearance="ghost"
            accessoryLeft={<Icon name={"close"} fill="gray" />}
            onPress={props.onPress}
        />
    );
};

export default CloseButton;
