import React from "react";

import LottieView from "lottie-react-native";
import { View } from "react-native";

import styles from "./styles";

const SongPlayingAnimation = () => {
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
