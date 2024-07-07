import { memo, useMemo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import IconButton from "../../shared/iconButton/IconButton";
import ImageButton from "../../shared/imageButton/ImageButton";
import styles from "./styles";
import useCurrentUser from "../../../hooks/useCurrentUser";
import { useProfileModal } from "../../../hooks/context/ModalContext";

interface ProfileIconButtonProps extends ButtonProps {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ProfileIconButton: React.FC<ProfileIconButtonProps> = ({
    style = styles.button,
    imageStyle = styles.button,
    ...props
}: ProfileIconButtonProps) => {
    const { present } = useProfileModal();
    const user = useCurrentUser();
    const onPress = props.onPress || present;

    const buttonContent = useMemo(() => {
        return user.profileUrl ? (
            <ImageButton
                onPress={onPress}
                style={style}
                uri={user.profileUrl}
                imageStyle={imageStyle}
            />
        ) : (
            <IconButton
                onPress={present}
                style={style}
                iconName="person"
                iconColor="royalblue"
            />
        );
    }, [user]);

    return buttonContent;
};

export default memo(ProfileIconButton);
