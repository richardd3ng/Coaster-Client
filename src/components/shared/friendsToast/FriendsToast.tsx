import { View } from "react-native";

import { BaseToast } from "react-native-toast-message";
import FastImage from "react-native-fast-image";
import Toast, { BaseToastProps } from "react-native-toast-message";

import createStyles from "./styles";
import { DEFAULT_PROFILE_URI } from "../../../constants/assets";
import { FriendsTabName } from "../../../types/navigation";
import { useFriendsModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface FriendToastProps extends BaseToastProps {
    profileUrl?: string;
}

export const FriendToast: React.FC<FriendToastProps> = ({
    profileUrl,
    ...props
}: FriendToastProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { present: presentFriendsModal } = useFriendsModal();

    const ProfileImage = () => {
        return (
            <View style={styles.imageContainer}>
                <FastImage
                    source={
                        profileUrl ? { uri: profileUrl } : DEFAULT_PROFILE_URI
                    }
                    style={styles.image}
                />
            </View>
        );
    };

    const handlePress = () => {
        Toast.hide();
        presentFriendsModal(FriendsTabName.Requests);
    };

    return (
        <BaseToast
            text1={props.text1}
            text1NumberOfLines={2}
            text1Style={styles.text}
            contentContainerStyle={styles.contentContainer}
            renderLeadingIcon={ProfileImage}
            style={styles.toast}
            onPress={handlePress}
        />
    );
};
