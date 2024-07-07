import React, { useEffect, useRef, useCallback } from "react";
import { Alert, Text, View, Animated } from "react-native";
import { useSelector } from "react-redux";
import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import { RootState } from "../../../state/store";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import RecordingAnimation from "../recordingAnimation/RecordingAnimation";

const TrackingIndicator: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const historyLength = useSelector(
        (state: RootState) => state.location.history.length
    );
    const trackingOn = useSelector(
        (state: RootState) => state.user.currentUser?.preferences.trackSnapshots
    );
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const blink = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        blink.start();

        return () => blink.stop();
    }, [opacity, trackingOn]);

    const handlePress = useCallback(() => {
        Alert.alert(
            "This is the current number of location points tracked. It will reset whenever snapshots with your recently-played songs are uploaded to our server. If you notice the number not changing when you are moving at a fast pace and have location tracking on, please report the issue."
        );
    }, []);

    if (!trackingOn) {
        return null;
    }
    return (
        <CustomPressable onPress={handlePress} activeOpacity={0.8}>
            <View style={styles.container}>
                <RecordingAnimation />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{historyLength}</Text>
                </View>
            </View>
        </CustomPressable>
    );
};

export default TrackingIndicator;
