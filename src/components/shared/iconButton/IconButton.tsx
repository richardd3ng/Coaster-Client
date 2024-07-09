import { Button, ButtonProps, Icon } from "@ui-kitten/components";
import { StyleProp, ViewStyle } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface IconButtonProps extends ButtonProps {
    iconName: string;
    iconColor: string;
    style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonProps> = ({
    iconName,
    iconColor,
    style,
    ...buttonProps
}: IconButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <Button
            style={style || styles.button}
            appearance="ghost"
            accessoryLeft={
                <Icon name={iconName} fill={iconColor} style={styles.icon} />
            }
            {...buttonProps}
        />
    );
};

export default IconButton;
