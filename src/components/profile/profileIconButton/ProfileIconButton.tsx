import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import { CURRENT_USER_ID } from "../../../constants/defaults";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import IconButton from "../../shared/iconButton/IconButton";
import ImageButton from "../../shared/imageButton/ImageButton";
import styles from "./styles";
import { useUserInfo } from "../../../hooks/react-query/useQueryHooks";

interface ProfileIconButtonProps extends ButtonProps {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const ProfileIconButton: React.FC<ProfileIconButtonProps> = ({
    style = styles.button,
    imageStyle = styles.button,
    ...props
}: ProfileIconButtonProps) => {
    const { present } = useModal();
    const { data: user } = useUserInfo(CURRENT_USER_ID);
    const onPress = props.onPress || (() => present(ModalType.Profile));

    return user && user.profileUri ? (
        <ImageButton
            onPress={onPress}
            style={style}
            uri={user.profileUri}
            imageStyle={imageStyle}
        />
    ) : (
        <IconButton
            onPress={onPress}
            style={style}
            iconName="person"
            iconColor="royalblue"
        />
    );
};

export default ProfileIconButton;
