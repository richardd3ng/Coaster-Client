import { Song } from "../types/custom";
import { mockSongData } from "../mockData/constants";

export const fetchManySongs = async (songIds: number[]): Promise<Song[]> => {
    const songs: Song[] = [];
    songIds.forEach((id) => {
        const song = mockSongData.find((s) => s.id === id);
        if (song) {
            songs.push(song);
        }
    });
    return songs;
};
