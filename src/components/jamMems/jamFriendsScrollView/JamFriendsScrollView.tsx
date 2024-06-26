import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import FriendsListItem from "../../friends/friendsListItem/FriendsListItem";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface JamFriendsScrollViewProps {
    jamMemId: number;
    users: UserInfo[];
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
                    key={user.id}
                    user={user}
                    Button={<DeleteButton jamMemId={jamMemId} user={user} />}
                />
            ))}
        </BottomSheetScrollView>
    );
};

export default JamFriendsScrollView;
