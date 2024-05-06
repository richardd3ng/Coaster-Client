import {
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

import { Button, Divider, Icon } from "@ui-kitten/components";
import { ProfileOption } from "../../../types/custom";
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
    <Button
        style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
        }}
        appearance="ghost"
        accessoryLeft={<Icon name={"arrow-ios-forward"} fill="gray" />}
    />
);

const ProfileListItem: React.FC<ProfileListItemProps> = (
    props: ProfileListItemProps
) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.profileListItemContainer, props.style]}>
                {props.icon}
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 16,
                        flex: 1,
                        color: props.textColor,
                    }}
                >
                    {props.text}
                </Text>
                {!props.hideArrow && ArrowIcon}
            </View>
            {!props.hideDivider && (
                <Divider style={styles.profileListItemDivider} />
            )}
        </TouchableOpacity>
    );
};

export default ProfileListItem;
