import { useSelector } from "react-redux";

import { RootState } from "../../state/store";

// Most common useSelector hooks can be defined here. There are rare cases where you might need to define a custom hook (e.g. useCurrentUser in src/hooks/useCurrentUser.ts).

export const useCurrentLocation = () => {
    return useSelector((state: RootState) => state.location.currentLocation);
};

export const useCurrentlyPlayingSongId = () => {
    return useSelector((state: RootState) => state.song.currentlyPlayingSongId);
};

export const useCurrentRegion = () => {
    return useSelector((state: RootState) => state.location.currentRegion);
};

export const useHistoryLength = () => {
    return useSelector((state: RootState) => state.location.history.length);
};

export const useSelectedCluster = () => {
    return useSelector((state: RootState) => state.cluster.selectedCluster);
};

export const useSelectedJamMemId = () => {
    return useSelector((state: RootState) => state.jamMem.selectedJamMemId);
};

export const useTrackingOn = () => {
    return useSelector(
        (state: RootState) => state.user.currentUser?.preferences.trackSnapshots
    );
};

export const useLastSucccesfulSnapshotTimestamp = () => {
    return useSelector(
        (state: RootState) => state.snapshot.lastSuccessfulSnapshotTimestamp
    );
};

// export const use
