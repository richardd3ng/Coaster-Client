import { Button, ButtonProps, Icon } from "@ui-kitten/components";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface MapIconButtonProps extends ButtonProps {
    name: string;
    filled: boolean;
}

const MapIconButton: React.FC<MapIconButtonProps> = ({
    name,
    filled,
    ...props
}: MapIconButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
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
