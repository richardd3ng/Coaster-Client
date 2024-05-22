import AppLink from "react-native-app-link";

export const openSongInSpotify = (uri: string) => {
    AppLink.maybeOpenURL(uri, {
        appName: "spotify",
        appStoreId: 324684580,
        appStoreLocale: "us",
        playStoreId: "com.spotify.music",
    });
};
