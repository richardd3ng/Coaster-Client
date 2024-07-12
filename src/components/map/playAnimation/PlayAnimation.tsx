import { memo } from "react";

import LottieView from "lottie-react-native";
import { View } from "react-native";

import createStyles from "./styles";
import { PLAY_ANIMATION_URI } from "../../../constants/assets";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const PlayAnimation: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                source={PLAY_ANIMATION_URI}
                style={styles.animation}
                autoPlay
                loop
            />
        </View>
    );
};

export default memo(PlayAnimation);
