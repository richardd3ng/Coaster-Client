import { useEffect, useCallback, useMemo } from "react";
import TrackPlayer, {
    State,
    usePlaybackState,
} from "react-native-track-player";
import { useSelector } from "react-redux";

import { dispatchSetCurrentlyPlayingSongId } from "../state/storeUtils";
import { RootState } from "../state/store";
import { INVALID_SONG_ID } from "../state/song/songSlice";

const useTrackPlayer = (songId: string, url: string) => {
    console.log("rendering:", songId)
    const currentlyPlayingSongId = useSelector(
        (state: RootState) => state.song.currentlyPlayingSongId
    );
    const trackPlayerState = usePlaybackState().state;

    const isPlaying = useMemo(
        () =>
            currentlyPlayingSongId === songId &&
            trackPlayerState === State.Playing,
        [currentlyPlayingSongId, songId, trackPlayerState]
    );

    useEffect(() => {
        const setup = async () => {
            try {
                await TrackPlayer.setupPlayer();
            } catch (error) {} // player already set up
        };
        setup();

        return () => {
            TrackPlayer.reset();
        };
    }, []);

    const togglePlay = useCallback(async () => {
        if (currentlyPlayingSongId === songId) {
            await TrackPlayer.stop();
            dispatchSetCurrentlyPlayingSongId(INVALID_SONG_ID);
        } else {
            if (currentlyPlayingSongId !== INVALID_SONG_ID) {
                await TrackPlayer.stop();
            }
            await TrackPlayer.reset();
            await TrackPlayer.add({ url });
            await TrackPlayer.play();
            dispatchSetCurrentlyPlayingSongId(songId);
        }
    }, [currentlyPlayingSongId, songId, url]);

    return {
        isPlaying,
        togglePlay,
    };
};

export default useTrackPlayer;
