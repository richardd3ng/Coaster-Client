import { useCallback, useState } from "react";

import { Icon, Text } from "@ui-kitten/components";
import { View } from "react-native";

import AddFriendsDialog from "../addFriendsDialog/AddFriendsDialog";
import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import { UserInfoFragment } from "../../../gql/graphql";
import {
    useFriends,
    useJamMem,
} from "../../../hooks/react-query/useQueryHooks";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const AddFriendButton: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const { value: selectedJamMemId } = useJamMemModal();
    const { data: jamMem } = useJamMem(selectedJamMemId);
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
            <CustomPressable onPress={() => setShowDialog(true)}>
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
                open={showDialog}
                onClose={() => setShowDialog(false)}
            />
        </>
    );
};
export default AddFriendButton;
