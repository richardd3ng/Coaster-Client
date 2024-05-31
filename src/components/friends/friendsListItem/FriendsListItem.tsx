import { ReactElement } from "react";

import { Image, Text, View } from "react-native";

import createStyles from "./styles";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendsListItemProps {
    user: User;
    Button: ReactElement;
}

const FriendsListItem: React.FC<FriendsListItemProps> = ({
    user,
    Button,
}: FriendsListItemProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.listItemContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: user.profileUri,
                    }}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.displayNameText}>{user.displayName}</Text>
                <Text style={styles.usernameText}>{user.username}</Text>
            </View>
            {Button}
        </View>
    );
};

export default FriendsListItem;
