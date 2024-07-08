import { useCallback, useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import AddFriendsDialog from "../addFriendsDialog/AddFriendsDialog";
import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { UserInfoFragment } from "../../../gql/graphql";
import {
    useFriends,
    useJamMem,
} from "../../../hooks/react-query/useQueryHooks";
import { useSelecteJamMemId } from "../../../hooks/redux/useSelectorHooks";
import useCurrentUser from "../../../hooks/useCurrentUser";

const AddFriendButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showCreationDialog, setShowCreationDialog] =
        useState<boolean>(false);
    const { data: jamMem } = useJamMem(useSelecteJamMemId());
    const currentUserId = useCurrentUser().id;
    const { data: friends } = useFriends(currentUserId);

    const getFriendsNotInJamMem = useCallback((): UserInfoFragment[] => {
        const jamMemFriendIds =
            jamMem?.friends?.map((friend) => friend._id) ?? [];

        return (
            friends
                ?.filter((friend) => !jamMemFriendIds.includes(friend._id))
                .sort(
                    (a, b) =>
                        a.displayName.localeCompare(b.displayName) ||
                        a.username.localeCompare(b.username)
                ) ?? []
        );
    }, [friends, jamMem]);

    const friendsNotInJamMem = getFriendsNotInJamMem();

    if (friendsNotInJamMem.length === 0) {
        return null;
    }
    return (
        <>
            <CustomPressable onPress={() => setShowCreationDialog(true)}>
                <View style={styles.container}>
                    <Icon
                        name="plus-square-outline"
                        fill={styles.icon.color}
                        style={styles.icon}
                    />
                    <Text style={styles.text}>Add Friends</Text>
                </View>
            </CustomPressable>
            <AddFriendsDialog
                friends={friendsNotInJamMem}
                open={showCreationDialog}
                onClose={() => setShowCreationDialog(false)}
            />
        </>
    );
};
export default AddFriendButton;
