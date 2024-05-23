import { Button, ButtonProps, Icon } from "@ui-kitten/components";

import styles from "./styles";

interface MapIconButtonProps extends ButtonProps {
    name: string;
    filled: boolean;
}

const MapIconButton: React.FC<MapIconButtonProps> = ({
    name,
    filled,
    ...props
}: MapIconButtonProps) => {
    return (
        <Button
            style={styles.button}
            appearance="ghost"
            accessoryLeft={<Icon name={filled ? name : `${name}-outline`} />}
            onPress={props.onPress}
        />
    );
};

export default MapIconButton;
