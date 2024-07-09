import { memo } from "react";

import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { View } from "react-native";

import createStyles from "./styles";
import { RootState } from "../../../state/store";
import { SONG_PLAYING_ANIMATION_URI } from "../../../constants/assets";
import {
    State as TrackPlayerState,
    usePlaybackState,
} from "react-native-track-player";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface SongPlayingAnimationProps {
    songId: string;
}

const SongPlayingAnimation: React.FC<SongPlayingAnimationProps> = ({
    songId,
}: SongPlayingAnimationProps) => {
    const styles = useThemeAwareObject(createStyles);
    const trackPlayerState = usePlaybackState().state;
    const currentlyPlayingSongId = useSelector(
        (state: RootState) => state.song.currentlyPlayingSongId
    );
    const isPlaying =
        currentlyPlayingSongId === songId &&
        trackPlayerState === TrackPlayerState.Playing;

    if (!isPlaying) {
        return null;
    }
    return (
        <View style={styles.animationContainer}>
            <LottieView
                source={SONG_PLAYING_ANIMATION_URI}
                style={styles.animation}
                autoPlay
                loop
            />
        </View>
    );
};

export default memo(SongPlayingAnimation);
