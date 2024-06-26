import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import AddButton from "../addButton/AddButton";
import AddedIcon from "../addedIcon/AddedIcon";
import CancelRequestButton from "../cancelRequestButton/CancelRequestButton";
import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import FriendsListItem from "../friendsListItem/FriendsListItem";
import { Text, View } from "react-native";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendsListProps {
    friends?: UserInfo[];
    moreResults?: UserInfo[];
    pendingRequests?: UserInfo[];
    sentRequests?: UserInfo[];
    refetchQuery?: () => void;
}

const FriendsScrollView: React.FC<FriendsListProps> = ({
    friends,
    moreResults,
    pendingRequests,
    sentRequests,
    refetchQuery,
}: FriendsListProps) => {
    const styles = useThemeAwareObject(createStyles);
    return (
        <BottomSheetScrollView
            showsVerticalScrollIndicator
            style={styles.scrollView}
        >
            {friends && (
                <Text key={-1} style={styles.text}>{`My Friends (${
                    friends.length < 50 ? friends.length : "50+"
                })`}</Text>
            )}
            {(friends ?? []).map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    user={friend}
                    Button={<DeleteButton user={friend} />}
                />
            ))}
            {(moreResults ?? []).length > 0 && (
                <Text key={-2} style={styles.text}>
                    More Results
                </Text>
            )}
            {refetchQuery &&
                (moreResults ?? []).map((user) => (
                    <FriendsListItem
                        key={user.id}
                        user={user}
                        Button={
                            <AddButton user={user} onSuccess={refetchQuery} />
                        }
                    />
                ))}
            {pendingRequests && (
                <Text key={-2} style={styles.text}>{`Friend Requests (${
                    pendingRequests!.length < 50
                        ? pendingRequests!.length
                        : "50+"
                })`}</Text>
            )}
            {(sentRequests ?? []).length > 0 && (
                <Text key={-3} style={styles.text}>
                    Sent Requests
                </Text>
            )}
            {sentRequests &&
                sentRequests.map((user) => (
                    <FriendsListItem
                        key={user.id}
                        user={user}
                        Button={<CancelRequestButton user={user} />}
                        Icon={<AddedIcon />}
                    />
                ))}
            <View style={styles.bottomPadding} />
        </BottomSheetScrollView>
    );
};

export default FriendsScrollView;
