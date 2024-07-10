import { memo } from "react";

import LottieView from "lottie-react-native";
import { View } from "react-native";

import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import createStyles from "./styles";
import { RECORDING_ANIMATION_URI } from "../../../constants/assets";

const RecordingAnimation: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                source={RECORDING_ANIMATION_URI}
                style={styles.animation}
                autoPlay
                loop
            />
        </View>
    );
};

export default memo(RecordingAnimation);
