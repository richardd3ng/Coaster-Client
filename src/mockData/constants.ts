import { generateRandomSongPoints } from "./scripts";
import { JamMem } from "../types/entities";

export const mockJamMemData: JamMem[] = [
    {
        id: 1,
        ownerId: 1,
        location: "New York",
        title: "Jam Session in Central Park",
        start: new Date(1630454400000),
        end: new Date(1630497600000),
        coverUri:
            "https://fastly.picsum.photos/id/289/200/300.jpg?hmac=TVh4H_Hra3e1VSDPJz-mhCgep32qIa7T6DGQvbrjMb4",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
    {
        id: 2,
        ownerId: 1,
        location: "San Francisco",
        title: "Music under the Golden Gate Bridge",
        start: new Date(1630454400000),
        end: new Date(1630522800000),
        coverUri:
            "https://fastly.picsum.photos/id/392/200/300.jpg?hmac=tcnub3WKREnSOdoCn7rQtfZkHXNWn5fXwNpHrv0o-5k",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
    {
        id: 3,
        ownerId: 1,
        location: "Ohio",
        title: "This is a really long jam session title that may span a ton of lines",
        start: new Date(1630454400000),
        end: new Date(1630579200000),
        coverUri:
            "https://fastly.picsum.photos/id/292/200/300.jpg?hmac=zm-TXplXe70N7LGm2HWu9iOPXoBtQvwyhAF2CSj0ccs",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
    {
        id: 4,
        ownerId: 1,
        location: "Lake Tahoe",
        title: "Fishing Jam",
        start: new Date(1630454400000),
        end: new Date(1630747200000),
        coverUri:
            "https://fastly.picsum.photos/id/574/200/300.jpg?hmac=8A2sOGZU1xgRXI46snJ80xNY3Yx-KcLVsBG-wRchwFg",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
    {
        id: 5,
        ownerId: 1,
        location: "China",
        title: "Jason's House",
        start: new Date(1630454400000),
        end: new Date(1633065600000),
        coverUri:
            "https://fastly.picsum.photos/id/397/200/300.jpg?hmac=9VBInLrifj_yyc2JuJSAVIfj9yQdt5Ovm2sHmvva-48",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
    {
        id: 6,
        ownerId: 1,
        location: "Myrtle Beach",
        title: "Spanish Galleon",
        start: new Date(1630454400000),
        end: new Date(1638148800000),
        coverUri:
            "https://fastly.picsum.photos/id/316/200/300.jpg?hmac=sq0VBO6H0wGg9Prod7MVUUB_7B91kmD5E1X1TRSo66U",
        snapshots: generateRandomSongPoints(50),
        friends: [],
    },
];