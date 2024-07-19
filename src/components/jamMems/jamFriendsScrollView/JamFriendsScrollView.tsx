import { ScrollView } from "react-native";

import createStyles from "./styles";
import RemoveFriendButton from "../removeFriendButton/RemoveFriendButton";
import FriendsListItem from "../../friends/friendsListItem/FriendsListItem";
import { UserInfoFragment } from "../../../gql/graphql";
import { useJamMem } from "../../../hooks/react-query/useQueryHooks";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { useUserId } from "../../../hooks/useUserHooks";

interface JamFriendsScrollViewProps {
    users: UserInfoFragment[];
}

const JamFriendsScrollView: React.FC<JamFriendsScrollViewProps> = ({
    users,
}: JamFriendsScrollViewProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { options } = useJamMemModal();
    const userId = useUserId();
    const jamMemId: string = options?.jamMemId;
    const { data: jamMem } = useJamMem(jamMemId);
    const isOwner = userId === jamMem?.ownerId;
    
    return (
        <ScrollView showsVerticalScrollIndicator style={styles.scrollView}>
            {users.map((user) => (
                <FriendsListItem
                    key={user._id}
                    user={user}
                    leftComponent={
                        isOwner && userId !== user._id ? (
                            <RemoveFriendButton user={user} />
                        ) : undefined
                    }
                />
            ))}
        </ScrollView>
    );
};

export default JamFriendsScrollView;
