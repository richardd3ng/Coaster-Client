import { ReactElement } from "react";
import { Image, Text, View } from "react-native";
import createStyles from "./styles";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendsListItemProps {
    user: UserInfo;
    Button: ReactElement;
    Icon?: ReactElement;
}

const FriendsListItem: React.FC<FriendsListItemProps> = ({
    user,
    Button,
    Icon,
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
            <View style={styles.iconButtonContainer}>
                {Icon}
                {Button}
            </View>
        </View>
    );
};

export default FriendsListItem;
