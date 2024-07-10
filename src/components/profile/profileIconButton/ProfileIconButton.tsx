import { memo, useMemo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import createStyles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";
import ImageButton from "../../shared/imageButton/ImageButton";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useProfileModal } from "../../../hooks/context/ModalContext";
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
    const user = useCurrentUser();
    const onPress = props.onPress || present;

    const buttonContent = useMemo(() => {
        return user.profileUrl ? (
            <ImageButton
                onPress={onPress}
                style={style || styles.button}
                uri={user.profileUrl}
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
    }, [user]);

    return buttonContent;
};

export default memo(ProfileIconButton);
