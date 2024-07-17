import { Divider, Icon } from "@ui-kitten/components";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { ProfileOption } from "../../../types/navigation";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

export interface ProfileListItemProps {
    text: ProfileOption;
    onPress: () => void;
    icon?: React.ReactElement;
    hideArrow?: boolean;
    hideDivider?: boolean;
    textColor?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({
    text,
    onPress,
    icon,
    hideArrow,
    hideDivider,
    textColor,
    containerStyle,
}: ProfileListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                {icon}
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
                {!hideArrow && (
                    <Icon
                        name="arrow-ios-forward"
                        style={styles.icon}
                        fill={styles.icon.color}
                    />
                )}
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default ProfileListItem;
