import { useState } from "react";

import FastImage from "react-native-fast-image";
import { Input } from "@ui-kitten/components";
import { Text, View } from "react-native";

import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import createStyles from "./styles";
import { encodeBase64 } from "../../../utils/fileSystemUtils";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import useMutationErrorAlert from "../../../hooks/useMutationErrorAlert";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { validateUserInputs } from "../../../utils/validationUtils";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { ImagePickerButton } from "../../jamMems/imagePickerButton/ImagePickerButton";
import { DEFAULT_PROFILE_URI } from "../../../constants/assets";
import { useMutationToUpdateProfile } from "../../../hooks/react-query/useMutationHooks";

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
    
    useMutationErrorAlert({ isError, error, reset });
    const currentUser = useCurrentUser();
    const [displayName, setDisplayName] = useState<string>(
        currentUser.displayName
    );
    const [username, setUsername] = useState<string>(currentUser.username);
    const [profileUri, setProfileUri] = useState<string>(
        currentUser.profileUrl
    );

    const handleConfirm = async () => {
        if (!validateUserInputs(displayName, username)) {
            return;
        }
        updateProfile(
            {
                id: currentUser.id,
                record: {
                    displayName:
                        displayName !== currentUser.displayName
                            ? displayName
                            : undefined,
                    username:
                        username !== currentUser.username
                            ? username
                            : undefined,
                    profilePicture:
                        profileUri !== currentUser.profileUrl
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
        setDisplayName(currentUser.displayName);
        setUsername(currentUser.username);
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
