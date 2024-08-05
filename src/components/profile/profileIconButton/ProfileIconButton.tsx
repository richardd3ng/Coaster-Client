import { memo } from "react";

import { ButtonProps } from "@ui-kitten/components";
import { StyleProp } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import FastImage, { ImageStyle } from "react-native-fast-image";
import { DEFAULT_PROFILE_URI } from "../../../constants/assets";
import { useProfileModal } from "../../../hooks/context/ModalContext";
import { useProfileUrl } from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface ProfileIconButtonProps extends ButtonProps {
    imageStyle?: StyleProp<ImageStyle>;
}

const ProfileIconButton: React.FC<ProfileIconButtonProps> = ({
    imageStyle,
    ...props
}: ProfileIconButtonProps) => {
    const styles = useThemeAwareObject(createStyles);
    const { present } = useProfileModal();
    const profileUrl = useProfileUrl();

    return (
        <CustomPressable activeOpacity={1} onPress={props.onPress || present}>
            <FastImage
                source={profileUrl ? { uri: profileUrl } : DEFAULT_PROFILE_URI}
                style={imageStyle || styles.image}
            />
        </CustomPressable>
    );
};

export default memo(ProfileIconButton);
