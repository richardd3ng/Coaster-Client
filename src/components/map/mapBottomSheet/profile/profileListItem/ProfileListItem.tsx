import { Divider } from "@ui-kitten/components";
import { StyleProp, Text, View, ViewStyle } from "react-native";

import CustomPressable from "../../../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import IconButton from "../../../../shared/iconButton/IconButton";
import { ProfileOption } from "../../../../../types/navigation";
import useThemeAwareObject from "../../../../../hooks/useThemeAwareObject";

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

    const ArrowIcon = (
        <IconButton
            iconName="arrow-ios-forward"
            iconColor="gray"
            style={styles.button}
            onPress={onPress}
        />
    );

    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                {icon}
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
                {!hideArrow && ArrowIcon}
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default ProfileListItem;
