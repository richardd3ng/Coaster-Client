import { ButtonProps, Icon } from "@ui-kitten/components";
import { StyleProp, ViewStyle } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface CloseIconProps {
    iconStyle: StyleProp<ViewStyle>;
}

const CloseIcon: React.FC<CloseIconProps> = ({
    iconStyle,
}: CloseIconProps) => <Icon style={iconStyle} fill="gray" name="close" />;

interface CloseButtonProps extends ButtonProps {
    iconStyle?: StyleProp<ViewStyle>;
}

const CloseButton: React.FC<CloseButtonProps> = ({
    iconStyle,
    ...props
}: CloseButtonProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable
            onPress={props.onPress}
            style={props.style || styles.button}
        >
            <CloseIcon iconStyle={iconStyle || styles.icon} />
        </CustomPressable>
    );
};

export default CloseButton;
