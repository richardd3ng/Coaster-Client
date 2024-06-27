import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import AcceptRequestButton from "../acceptRequestButton/AcceptRequestButton";
import AddButton from "../addButton/AddButton";
import AddedIcon from "../addedIcon/AddedIcon";
import CancelRequestButton from "../cancelRequestButton/CancelRequestButton";
import createStyles from "./styles";
import DeleteButton from "../deleteButton/DeleteButton";
import FriendsListItem from "../friendsListItem/FriendsListItem";
import IgnoreRequestButton from "../ignoreRequestButton/IgnoreRequestButton";
import { Text, View } from "react-native";
import { UserInfo } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import SentRequestsTextButton from "../sentRequestsTextButton/SentRequestsTextButton";

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
                    leftComponent={<DeleteButton user={friend} />}
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
                        leftComponent={
                            <AddButton user={user} onSuccess={refetchQuery} />
                        }
                    />
                ))}
            {pendingRequests && (
                <View style={styles.requestsHeaderContainer}>
                    <Text key={-2} style={styles.text}>{`Friend Requests (${
                        pendingRequests!.length < 50
                            ? pendingRequests!.length
                            : "50+"
                    })`}</Text>
                    <SentRequestsTextButton />
                </View>
            )}
            {pendingRequests &&
                pendingRequests.map((user) => (
                    <FriendsListItem
                        key={user.id}
                        user={user}
                        leftComponent={<AcceptRequestButton user={user} />}
                        rightComponent={<IgnoreRequestButton user={user} />}
                    />
                ))}
            {sentRequests &&
                sentRequests.map((user) => (
                    <FriendsListItem
                        key={user.id}
                        user={user}
                        leftComponent={<AddedIcon />}
                        rightComponent={<CancelRequestButton user={user} />}
                    />
                ))}
            <View style={styles.bottomPadding} />
        </BottomSheetScrollView>
    );
};

export default FriendsScrollView;
