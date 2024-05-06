import { Button, Icon } from "@ui-kitten/components";

import styles from "./styles";

interface MapIconButtonProps {
    name: string;
    onPress: () => void;
    filled: boolean;
}

const MapIconButton: React.FC<MapIconButtonProps> = (
    props: MapIconButtonProps
) => {
    return (
        <Button
            style={styles.mapIconButton}
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
