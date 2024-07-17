import { useSelector } from "react-redux";

import { RootState } from "../../state/store";

// Most common useSelector hooks can be defined here. There are cases where you might need to define custom hooks (e.g. src/hooks/useUserHooks.ts).

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

export const useTrackSnapshots = () => {
    return useSelector(
        (state: RootState) => state.user.userLocalData?.trackSnapshots ?? true
    );
};

export const useProfileUrl = () => {
    return useSelector(
        (state: RootState) => state.user.userServerData?.profileUrl ?? ""
    );
};

export const useLastSucccesfulSnapshotTimestamp = () => {
    return useSelector(
        (state: RootState) => state.snapshot.lastSuccessfulSnapshotTimestamp
    );
};

export const useSearchResult = () => {
    return useSelector((state: RootState) => state.searchResult.searchResult);
};
