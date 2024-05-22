import { Button, ButtonProps, Icon } from "@ui-kitten/components";

import styles from "./styles";

interface MapIconButtonProps extends ButtonProps {
    name: string;
    filled: boolean;
}

const MapIconButton: React.FC<MapIconButtonProps> = (
    props: MapIconButtonProps
) => {
    return (
        <Button
            style={styles.button}
            appearance="ghost"
            accessoryLeft={
                <Icon
                    name={props.filled ? props.name : `${props.name}-outline`}
                />
            }
            onPress={props.onPress}
        />
    );
};

export default MapIconButton;
