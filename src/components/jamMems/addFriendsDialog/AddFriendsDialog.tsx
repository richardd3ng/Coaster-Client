import { useState } from "react";

import { View } from "react-native";

import AddFriendsDropdown from "../addFriendsDropdown/AddFriendsDropdown";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import { useMutationToAddFriendsToJamMem } from "../../../hooks/react-query/useMutationHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { UserInfoFragment } from "../../../gql/graphql";

interface AddFriendsDialogProps {
    friends: UserInfoFragment[];
    open: boolean;
    onClose: () => void;
}

const AddFriendsDialog: React.FC<AddFriendsDialogProps> = ({
    friends,
    open,
    onClose,
}: AddFriendsDialogProps) => {
    const styles = useThemeAwareObject(createStyles);
    const [friendIds, setFriendIds] = useState<string[]>([]);
    const {
        mutate: addFriends,
        isPending,
        isError,
        error,
        reset,
    } = useMutationToAddFriendsToJamMem();
    useMutationErrorToast({ isError, error, reset });
    const { value: jamMemId } = useJamMemModal();

    const handleConfirm = () => {
        addFriends(
            {
                jamMemId,
                friendIds,
            },
            {
                onSuccess: onClose,
            }
        );
    };

    const DialogContent = (
        <View style={styles.dialogContainer}>
            <AddFriendsDropdown
                friends={friends}
                onSelect={(selectedIndex) => {
                    setFriendIds(
                        selectedIndex.map((index) => friends[index.row]._id)
                    );
                }}
            />
        </View>
    );

    return (
        <ConfirmationDialog
            title="Add Friends to Jam Mem"
            open={open}
            onClose={onClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            children={
                <>
                    {DialogContent}
                    <LoadingModal
                        visible={isPending}
                        text="Adding Friends..."
                    />
                </>
            }
            sameButtonTextStyle
        />
    );
};

export default AddFriendsDialog;
