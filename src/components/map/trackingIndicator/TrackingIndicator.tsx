import { useEffect, useRef, useCallback, useState } from "react";

import { Alert, Animated, Text, View } from "react-native";

import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import RecordingAnimation from "../recordingAnimation/RecordingAnimation";
import {
    useHistoryLength,
    useTrackingOn,
} from "../../../hooks/redux/useSelectorHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";
import { Icon } from "@ui-kitten/components";
import ConfirmationDialog from "../../shared/confirmationDialog/ConfirmationDialog";
import {
    DISABLE_TRACKING_CONFIRMATION_DESCRIPTION,
    DISABLE_TRACKING_CONFIRMATION_TITLE,
    setTrackSnapshots,
} from "../../profile/preferences/trackSnapshots/TrackSnapshots";
import PlayAnimation from "../playAnimation/PlayAnimation";
import useCurrentUser from "../../../hooks/useCurrentUser";

const TrackingIndicator: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const historyLength = useHistoryLength();
    const trackingOn = useTrackingOn();
    const opacity = useRef(new Animated.Value(1)).current;
    const currentUser = useCurrentUser();
    const [showConfiramtionDialog, setShowConfirmationDialog] =
        useState<boolean>(false);

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

    const handlePressQuestion = useCallback(() => {
        Alert.alert(
            "Location Tracking",
            "This is the current number of location points stored locally on your device. It will reset whenever snapshots with your recently-played songs are uploaded to our server."
        );
    }, []);

    const handlePressIndicator = useCallback(() => {
        if (trackingOn) {
            setShowConfirmationDialog(true);
        } else {
            setTrackSnapshots(currentUser, true);
        }
    }, [trackingOn, currentUser]);

    return (
        <View style={styles.container}>
            <CustomPressable onPress={handlePressIndicator} activeOpacity={0.8}>
                <View style={styles.indicatorContainer}>
                    {trackingOn ? <RecordingAnimation /> : <PlayAnimation />}
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{historyLength}</Text>
                    </View>
                </View>
            </CustomPressable>
            <CustomPressable
                onPress={handlePressQuestion}
                style={{ paddingLeft: 4 }}
            >
                <Icon
                    name="question-mark-circle-outline"
                    style={styles.questionIcon}
                    fill={styles.questionIcon.color}
                />
            </CustomPressable>
            <ConfirmationDialog
                title={DISABLE_TRACKING_CONFIRMATION_TITLE}
                description={DISABLE_TRACKING_CONFIRMATION_DESCRIPTION}
                open={showConfiramtionDialog}
                onClose={() => setShowConfirmationDialog(false)}
                onConfirm={() => setTrackSnapshots(currentUser, false)}
            />
        </View>
    );
};

export default TrackingIndicator;
