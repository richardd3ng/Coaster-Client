import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import FriendsListItem from "../../friends/friendsListItem/FriendsListItem";
import { UserInfoFragment } from "../../../gql/graphql";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface JamFriendsScrollViewProps {
    jamMemId: number;
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
                        <DeleteButton jamMemId={jamMemId} user={user} />
                    }
                />
            ))}
        </BottomSheetScrollView>
    );
};

export default JamFriendsScrollView;
