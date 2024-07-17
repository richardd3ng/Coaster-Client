import { memo, useMemo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ImageButton from "../../shared/imageButton/ImageButton";
import { useProfileModal } from "../../../hooks/context/ModalContext";
import { useProfileUrl } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ProfileIconButtonProps extends ButtonProps {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ProfileIconButton: React.FC<ProfileIconButtonProps> = ({
    style,
    imageStyle,
    ...props
}: ProfileIconButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useProfileModal();
    const profileUrl = useProfileUrl();
    const onPress = props.onPress || present;

    const buttonContent = useMemo(() => {
        return profileUrl ? (
            <ImageButton
                onPress={onPress}
                style={style || styles.button}
                uri={profileUrl}
                imageStyle={imageStyle}
            />
        ) : (
            <IconButton
                onPress={present}
                style={style || styles.button}
                iconName="person"
                iconColor={styles.icon.color}
            />
        );
    }, [profileUrl]);

    return buttonContent;
};

export default memo(ProfileIconButton);
