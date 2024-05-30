import { useEffect, useState } from "react";

import { ActivityIndicator, Alert, Image, Text, View } from "react-native";

import CloseButton from "../../shared/closeButton/CloseButton";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { User } from "../../../types/entities";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

import { useMutationToDeleteFriend } from "../../../hooks/react-query/useMutationHooks";

interface FriendsListItemProps {
    friend: User;
}

const FriendsListItem: React.FC<FriendsListItemProps> = ({
    friend,
}: FriendsListItemProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const {
        mutate: deleteFriend,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToDeleteFriend();

    useEffect(() => {
        if (isError && error) {
            Alert.alert(error.message);
        }
        reset();
    }, [isError, error]);

    return (
        <>
            <View style={styles.listItemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: friend.profileUri,
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{friend.displayName}</Text>
                </View>
                <View style={styles.deleteButtonContainer}>
                    {isPending ? (
                        <ActivityIndicator />
                    ) : (
                        <CloseButton
                            style={styles.deleteButton}
                            onPress={() => setShowConfirmation(true)}
                            iconStyle={styles.deleteIcon}
                        />
                    )}
                </View>
            </View>
            <ConfirmationDialog
                open={showConfirmation}
                title={`Are you sure you want to remove ${friend.displayName} from your friends?`}
                description={`You will no longer be able to add each other to Jam Mems. If you added ${friend.displayName} to a Jam Mem you created, they will be removed, and vice versa.`}
                onClose={() => setShowConfirmation(false)}
                onConfirm={() => deleteFriend(friend.id)}
            />
        </>
    );
};

export default FriendsListItem;
