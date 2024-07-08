import { memo } from "react";

import LottieView from "lottie-react-native";
import { View } from "react-native";

import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import createStyles from "./styles";

const RecordingAnimation: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                source={require("../../../../assets/animations/recording.json")}
                style={styles.animation}
                autoPlay
                loop
            />
        </View>
    );
};

export default memo(RecordingAnimation);
