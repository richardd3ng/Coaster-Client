import { View } from "react-native";

import { BaseToast } from "react-native-toast-message";
import FastImage from "react-native-fast-image";
import Toast, { BaseToastProps } from "react-native-toast-message";

import createStyles from "./styles";
import { DEFAULT_PROFILE_URI } from "../../../constants/assets";
import { JamMemTabName } from "../../../types/navigation";
import { useJamMemModal } from "../../../hooks/context/ModalContext";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface JamMemToastProps extends BaseToastProps {
    profileUrl?: string;
    jamMemId: string;
    tabName?: JamMemTabName;
}

export const JamMemToast: React.FC<JamMemToastProps> = ({
    profileUrl,
    jamMemId,
    tabName,
    ...props
}: JamMemToastProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { present, setSnapIndex } = useJamMemModal();

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
        present({ jamMemId, tabName });
        setSnapIndex(1);
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
