import { Divider } from "@ui-kitten/components";
import {
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

import IconButton from "../../../../shared/iconButton/IconButton";
import { ProfileOption } from "../../../../../types/custom";
import styles from "./styles";

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

const ProfileListItem: React.FC<ProfileListItemProps> = (
    props: ProfileListItemProps
) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, props.style]}>
                {props.icon}
                <Text style={[styles.text, { color: props.textColor }]}>
                    {props.text}
                </Text>
                {!props.hideArrow && ArrowIcon}
            </View>
            {!props.hideDivider && <Divider style={styles.divider} />}
        </TouchableOpacity>
    );
};

export default ProfileListItem;
