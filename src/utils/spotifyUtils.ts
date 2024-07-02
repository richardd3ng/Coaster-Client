import AppLink from "react-native-app-link";

/**
 * Open a uri in Spotify
 * @param uri The URI to open
 */
export const openInSpotify = (uri: string) => {
    AppLink.maybeOpenURL(uri, {
        appName: "spotify",
        appStoreId: 324684580,
        appStoreLocale: "us",
        playStoreId: "com.spotify.music",
    });
};
