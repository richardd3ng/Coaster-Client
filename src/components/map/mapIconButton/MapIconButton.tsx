import { Button, ButtonProps, Icon } from "@ui-kitten/components";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface MapIconButtonProps extends ButtonProps {
    name: string;
    filled: boolean;
    iconColor?: string;
}

const MapIconButton: React.FC<MapIconButtonProps> = ({
    name,
    filled,
    iconColor,
    ...props
}: MapIconButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    return (
        <Button
            style={styles.button}
            appearance="ghost"
            accessoryLeft={
                <Icon
                    name={filled ? name : `${name}-outline`}
                    fill={iconColor || styles.icon.color}
                />
            }
            onPress={props.onPress}
        />
    );
};

export default MapIconButton;
