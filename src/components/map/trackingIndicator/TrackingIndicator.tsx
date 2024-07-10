import { useEffect, useRef, useCallback } from "react";

import { Alert, Animated, Text, View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import RecordingAnimation from "../recordingAnimation/RecordingAnimation";
import {
    useHistoryLength,
    useTrackingOn,
} from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const TrackingIndicator: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const historyLength = useHistoryLength();
    const trackingOn = useTrackingOn();
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
