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
    style?: StyleProp<ViewStyle>;
}

const ArrowIcon = (
    <IconButton
        iconName="arrow-ios-forward"
        iconColor="gray"
        style={{ backgroundColor: "white" }}
    />
);

const ProfileListItem: React.FC<ProfileListItemProps> = ({
    text,
    onPress,
    icon,
    hideArrow,
    hideDivider,
    textColor,
    style,
}: ProfileListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <CustomPressable onPress={onPress}>
            <View style={[styles.container, style]}>
                {icon}
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
                {!hideArrow && ArrowIcon}
            </View>
            {!hideDivider && <Divider style={styles.divider} />}
        </CustomPressable>
    );
};

export default ProfileListItem;
