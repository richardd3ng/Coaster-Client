import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import createStyles from "./styles";
import RemoveFriendButton from "../removeFriendButton/RemoveFriendButton";
import FriendsListItem from "../../friends/friendsListItem/FriendsListItem";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface JamFriendsScrollViewProps {
    jamMemId: string;
    users: UserInfoFragment[];
}

const JamFriendsScrollView: React.FC<JamFriendsScrollViewProps> = ({
    jamMemId,
    users,
}: JamFriendsScrollViewProps) => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <BottomSheetScrollView
            showsVerticalScrollIndicator
            style={styles.scrollView}
        >
            {users.map((user) => (
                <FriendsListItem
                    key={user._id}
                    user={user}
                    leftComponent={
                        <RemoveFriendButton jamMemId={jamMemId} user={user} />
                    }
                />
            ))}
        </BottomSheetScrollView>
    );
};

export default JamFriendsScrollView;
