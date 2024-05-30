import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";

import createStyles from "./styles";
import ErrorView from "../../shared/errorView/ErrorView";
import FriendsListItem from "../friendsListItem/FriendsListItem";
import LoadingView from "../../shared/loadingView/LoadingView";
import { Text, View } from "react-native";
import { useFriends } from "../../../hooks/react-query/useQueryHooks";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const FriendsList: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const { data: friends, isFetching, isError, error, refetch } = useFriends();

    const renderItem = useCallback(
        ({ item }: { item: User }) => <FriendsListItem friend={item} />,
        []
    );

    return isFetching ? (
        <LoadingView />
    ) : isError ? (
        <ErrorView message={error.message} onTryAgain={refetch} />
    ) : friends ? (
        <View style={styles.container}>
            <Text style={styles.text}>{`My Friends (${
                friends.length < 50 ? friends.length : "50+"
            })`}</Text>
            <BottomSheetFlatList
                data={friends}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator
                style={styles.flatList}
                ItemSeparatorComponent={() => (
                    <Divider style={styles.divider} />
                )}
                refreshing={false}
                onRefresh={refetch}
            />
        </View>
    ) : null;
};

export default FriendsList;
