import { Button, ButtonProps, Icon } from "@ui-kitten/components";
import { StyleProp, ViewStyle } from "react-native";

import styles from "./styles";

interface IconButtonProps extends ButtonProps {
    iconName: string;
    iconColor: string;
    style?: StyleProp<ViewStyle>;
}

const IconButton: React.FC<IconButtonProps> = ({
    iconName,
    iconColor,
    style = styles.button,
    ...buttonProps
}) => (
    <Button
        style={style}
        appearance="ghost"
        accessoryLeft={() => (
            <Icon name={iconName} fill={iconColor} style={styles.icon} />
        )}
        {...buttonProps}
    />
);

export default IconButton;
