import React, { memo, useMemo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { ImageStyle, StyleProp, ViewStyle } from "react-native";

import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import ImageButton from "../../shared/imageButton/ImageButton";
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
        return (
            <ImageButton
                onPress={onPress}
                style={style}
                uri={user.profileUri}
                imageStyle={imageStyle}
            />
        );
    }, [user]);

    return buttonContent;
};

export default memo(ProfileIconButton);
