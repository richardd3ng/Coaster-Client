import { Song } from "../types/entities";
import { mockSongData } from "../mockData/constants";

export const fetchSong = async (id: number): Promise<Song> => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const song = mockSongData.find((s) => s.id === id);
    if (song) {
        return song;
    }
    throw new Error("Unable to load song");
};
