import AppLink from "react-native-app-link";

/**
 * Open a song in Spotify
 * @param uri The URI of the song to open
 */
export const openSongInSpotify = (uri: string) => {
    AppLink.maybeOpenURL(uri, {
        appName: "spotify",
        appStoreId: 324684580,
        appStoreLocale: "us",
        playStoreId: "com.spotify.music",
    });
};
