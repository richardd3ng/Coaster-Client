import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import useAutoLogout from "./useAutoLogout";

export const useUserId = (): string => {
    const userId: string | null = useSelector(
        (state: RootState) => state.user.userServerData?._id ?? null
    );
    useAutoLogout<string>(userId);
    return userId!;
};

export const useUserSpotifyId = (): string => {
    const spotifyId: string | null = useSelector(
        (state: RootState) => state.user.userServerData?.spotifyId ?? null
    );
    useAutoLogout<string>(spotifyId);
    return spotifyId!;
};

export const useUsername = (): string => {
    const username: string | null = useSelector(
        (state: RootState) => state.user.userServerData?.username ?? null
    );
    useAutoLogout<string>(username);
    return username!;
};

export const useDisplayName = (): string => {
    const displayName: string | null = useSelector(
        (state: RootState) => state.user.userServerData?.displayName ?? null
    );
    useAutoLogout<string>(displayName);
    return displayName!;
};
