import { Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, Icon } from "@ui-kitten/components";

import { ProfileOption } from "../../../types/custom";
import styles from "./styles";

export interface ProfileListItemProps {
    profileOption: ProfileOption;
    onPress: () => void;
    icon?: React.ReactElement;
    hideArrow?: boolean;
}

const ArrowIcon = (
    <Button
        style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
        }}
        appearance="ghost"
        accessoryLeft={<Icon name={"arrow-right"} fill="gray" />}
    />
);

const ProfileListItem: React.FC<ProfileListItemProps> = (
    props: ProfileListItemProps
) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.profileListItemContainer}>
                {props.icon}
                <Text style={{ fontSize: 16, paddingLeft: 16 }}>
                    {props.profileOption}
                </Text>
                {props.hideArrow ? undefined : ArrowIcon}
            </View>
            <Divider style={styles.profileListItemDivider} />
        </TouchableOpacity>
    );
};

export default ProfileListItem;
