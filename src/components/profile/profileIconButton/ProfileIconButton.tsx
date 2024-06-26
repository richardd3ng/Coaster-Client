import React, { memo, useMemo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import IconButton from "../../shared/iconButton/IconButton";
import ImageButton from "../../shared/imageButton/ImageButton";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import styles from "./styles";
import useCurrentUser from "../../../hooks/useCurrentUser";

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
    const user = useCurrentUser();
    const onPress = props.onPress || (() => present(ModalType.Profile));

    const buttonContent = useMemo(() => {
        return user.profileUri ? (
            <ImageButton
                onPress={onPress}
                style={style}
                uri={user.profileUri}
                imageStyle={imageStyle}
            />
        ) : (
            <IconButton
                onPress={() => present(ModalType.Profile)}
                style={style}
                iconName="person"
                iconColor="royalblue"
            />
        );
    }, [user]);

    return buttonContent;
};

export default memo(ProfileIconButton);
