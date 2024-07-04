import React from "react";

import LottieView from "lottie-react-native";
import { View } from "react-native";

import createStyles from "./styles";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const SongPlayingAnimation = () => {
    const styles = useThemeAwareObject(createStyles);
    
    return (
        <View style={styles.animationContainer}>
            <LottieView
                source={require("../../../../assets/animations/song-playing-animation.json")}
                style={styles.animation}
                autoPlay
                loop
            />
        </View>
    );
};

export default SongPlayingAnimation;
