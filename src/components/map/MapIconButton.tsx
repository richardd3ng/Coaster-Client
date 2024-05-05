import React from "react";
import { Button, Icon } from "@ui-kitten/components";
import styles from "../shared/styles";

interface MapIconButtonProps {
    onPress: () => void;
    filled: boolean;
}

const MapIconButton = (props: MapIconButtonProps) => {
    return (
        <Button
            style={styles.iconButton}
            appearance="ghost"
            accessoryLeft={
                <Icon
                    name={
                        props.filled ? "navigation-2" : "navigation-2-outline"
                    }
                />
            }
            onPress={props.onPress}
        />
    );
};

export default MapIconButton;
