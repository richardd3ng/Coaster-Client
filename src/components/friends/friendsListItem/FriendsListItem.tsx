import { ReactElement } from "react";

import FastImage from "react-native-fast-image";
import { Text, View } from "react-native";

import createStyles from "./styles";
import { DEFAULT_PROFILE_URI } from "../../../constants/defaults";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendsListItemProps {
    user: UserInfoFragment;
    leftComponent: ReactElement;
    rightComponent?: ReactElement;
}

const FriendsListItem: React.FC<FriendsListItemProps> = ({
    user,
    leftComponent,
    rightComponent,
}: FriendsListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.listItemContainer}>
            <View style={styles.imageContainer}>
                <FastImage
                    source={
                        user.profileUrl
                            ? { uri: user.profileUrl }
                            : DEFAULT_PROFILE_URI
                    }
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.displayNameText}>{user.displayName}</Text>
                <Text style={styles.usernameText}>{user.username}</Text>
            </View>
            <View style={styles.iconButtonContainer}>
                {leftComponent}
                {rightComponent}
            </View>
        </View>
    );
};

export default FriendsListItem;
