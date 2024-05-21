import axios from "axios";
import { SPOTIFY_REDIRECT_URI } from "@env";

export const getSpotifyCredentials = async () => {
    try {
        const res = await axios.post("http://localhost:3000/spotify/login");
        const spotifyCredentials = res.data;
        console.log("Spotify credentials:", spotifyCredentials);
        return spotifyCredentials;
    } catch (error) {
        console.error("Error fetching Spotify credentials:", error);
        throw new Error("Failed to fetch Spotify credentials");
    }
};
