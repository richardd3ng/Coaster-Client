import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import AddButton from "../addButton/AddButton";
import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import FriendsListItem from "../friendsListItem/FriendsListItem";
import { Text, View } from "react-native";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendsListProps {
    friends: User[];
    moreResults: User[];
}

const FriendsScrollView: React.FC<FriendsListProps> = ({
    friends,
    moreResults,
}: FriendsListProps) => {
    const styles = useThemeAwareObject(createStyles);

    const FriendsHeader = (
        <Text key={-1} style={styles.text}>{`My Friends (${
            friends.length < 50 ? friends.length : "50+"
        })`}</Text>
    );

    const MoreResultsHeader = (
        <Text key={-2} style={styles.text}>
            More Results
        </Text>
    );

    return (
        <BottomSheetScrollView
            showsVerticalScrollIndicator
            style={styles.scrollView}
        >
            {FriendsHeader}
            {friends.map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    user={friend}
                    Button={<DeleteButton user={friend} />}
                />
            ))}
            {moreResults.length > 0 && MoreResultsHeader}
            {moreResults.map((user) => (
                <FriendsListItem
                    key={user.id}
                    user={user}
                    Button={<AddButton user={user} />}
                />
            ))}
            <View style={styles.bottomPadding} />
        </BottomSheetScrollView>
    );
};

export default FriendsScrollView;
