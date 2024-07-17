import { useState } from "react";

import FastImage from "react-native-fast-image";
import { Input } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useMutationErrorToast from "../../../hooks/useMutationErrorToast";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { validateUserInputs } from "../../../utils/validationUtils";
import { ImagePickerButton } from "../../jamMems/imagePickerButton/ImagePickerButton";
import { DEFAULT_PROFILE_URI } from "../../../constants/assets";
import { useMutationToUpdateProfile } from "../../../hooks/react-query/useMutationHooks";
import {
    useDisplayName,
    useUserId,
    useUsername,
} from "../../../hooks/useUserHooks";
import { useProfileUrl } from "../../../hooks/redux/useSelectorHooks";

interface EditProfileProps {
    open: boolean;
    onClose: () => void;
}

const EditProfileDialog: React.FC<EditProfileProps> = ({
    open,
    onClose,
}: EditProfileProps) => {
    const styles = useThemeAwareObject(createStyles);
    const {
        mutate: updateProfile,
        isError,
        error,
        isPending,
        reset,
    } = useMutationToUpdateProfile();

    useMutationErrorToast({ isError, error, reset });
    const id = useUserId();
    const currentDisplayName = useDisplayName();
    const currentUserName = useUsername();
    const currentProfileUrl = useProfileUrl();
    const [displayName, setDisplayName] = useState<string>(currentDisplayName);
    const [username, setUsername] = useState<string>(currentUserName);
    const [profileUri, setProfileUri] = useState<string>(currentProfileUrl);

    const handleConfirm = async () => {
        if (!validateUserInputs(displayName, username)) {
            return;
        }
        updateProfile(
            {
                id,
                record: {
                    displayName:
                        displayName !== currentDisplayName
                            ? displayName
                            : undefined,
                    username:
                        username !== currentUserName ? username : undefined,
                    profilePicture:
                        profileUri !== currentProfileUrl
                            ? await encodeBase64(profileUri)
                            : undefined,
                },
            },
            {
                onSuccess: onClose,
            }
        );
    };

    const handleClose = () => {
        setDisplayName(currentDisplayName);
        setUsername(currentUserName);
        setProfileUri(currentProfileUrl);
        onClose();
    };

    return (
        <ConfirmationDialog
            title="Edit Profile"
            open={open}
            onClose={handleClose}
            onConfirm={handleConfirm}
            preventDefaultConfirm
            children={
                <>
                    <View style={styles.dialogContainer}>
                        <Text style={styles.label}>Display Name</Text>
                        <Input
                            onChangeText={setDisplayName}
                            value={displayName}
                            style={styles.displayNameInput}
                        />
                        <Text style={styles.label}>
                            Username (must be unique)
                        </Text>

                        <Input
                            onChangeText={setUsername}
                            value={username}
                            style={styles.usernameInput}
                        />
                        <View style={styles.imagePickerContainer}>
                            <FastImage
                                source={
                                    profileUri
                                        ? { uri: profileUri }
                                        : DEFAULT_PROFILE_URI
                                }
                                style={styles.image}
                            />
                            <ImagePickerButton
                                title="Profile Picture"
                                onImagePicked={setProfileUri}
                                style={styles.imagePickerButton}
                                cropperCircleOverlay
                                freeStyleCropEnabled
                            />
                        </View>
                    </View>
                    <LoadingModal
                        visible={isPending}
                        text="Updating Profile..."
                    />
                </>
            }
            sameButtonTextStyle
        />
    );
};

export default EditProfileDialog;
