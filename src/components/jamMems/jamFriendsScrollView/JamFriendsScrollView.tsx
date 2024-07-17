import { ScrollView } from "react-native";

import createStyles from "./styles";
import RemoveFriendButton from "../removeFriendButton/RemoveFriendButton";
import FriendsListItem from "../../friends/friendsListItem/FriendsListItem";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface JamFriendsScrollViewProps {
    users: UserInfoFragment[];
    hideDelete?: boolean;
}

const JamFriendsScrollView: React.FC<JamFriendsScrollViewProps> = ({
    users,
    hideDelete,
}: JamFriendsScrollViewProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <ScrollView showsVerticalScrollIndicator style={styles.scrollView}>
            {users.map((user) => (
                <FriendsListItem
                    key={user._id}
                    user={user}
                    leftComponent={
                        !hideDelete ? (
                            <RemoveFriendButton user={user} />
                        ) : undefined
                    }
                />
            ))}
        </ScrollView>
    );
};

export default JamFriendsScrollView;
