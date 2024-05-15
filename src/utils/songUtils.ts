import axios from "axios";

export interface SongTimestamp {
    songId: number;
    timestamp: number;
}

export const fetchRecentlyPlayedSongs = async (
    afterTimestamp: number
): Promise<SongTimestamp[]> => {
    // const endpoint = `https://api.spotify.com/v1/me/player/recently-played?limit=50&after=${afterTimestamp}`;
    // const response = await axios.get(endpoint, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     },
    // });

    // return response.data.items.map((item) => ({
    //     songId: item.track.id,
    //     timestamp: item.played_at,
    // }));

    return [
        {
            songId: 1,
            timestamp: 1715648029497,
        },
        {
            songId: 2,
            timestamp: 1715648031513,
        },
    ];
};

fetchRecentlyPlayedSongs(0);
