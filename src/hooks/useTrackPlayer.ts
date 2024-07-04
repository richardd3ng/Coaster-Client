import { useEffect, useCallback, useRef } from "react";
import TrackPlayer from "react-native-track-player";
import { useSelector } from "react-redux";

import { dispatchSetCurrentlyPlayingSongId } from "../state/storeUtils";
import { INVALID_SONG_ID } from "../state/song/songSlice";
import { RootState } from "../state/store";

const useTrackPlayer = (songId: string, url: string) => {
    const currentlyPlayingSongId = useSelector(
        (state: RootState) => state.song.currentlyPlayingSongId,
        (prev, next) => (prev === songId) === (next === songId)
    );

    const previousSongIdRef = useRef(currentlyPlayingSongId);

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
            if (previousSongIdRef.current !== INVALID_SONG_ID) {
                await TrackPlayer.stop();
            }
            await TrackPlayer.reset();
            await TrackPlayer.add({ url });
            await TrackPlayer.play();
            dispatchSetCurrentlyPlayingSongId(songId);
        }
        previousSongIdRef.current = currentlyPlayingSongId;
    }, [currentlyPlayingSongId, songId, url]);

    return {
        togglePlay,
    };
};

export default useTrackPlayer;
