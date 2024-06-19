import { generateRandomSongPoints, generateSongs } from "./scripts";
import { JamMem, Song, User } from "../types/entities";
import { Place } from "../api/placesAPI";

export const mockFriendsData: User[] = [
    {
        id: 1,
        username: "shanggang",
        displayName: "Jason Shang",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 2,
        username: "rdengomng",
        displayName: "Richard Deng",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 3,
        username: "joshisacow",
        displayName: "Josh Chen",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 4,
        username: "anikapawlak",
        displayName: "Anika Pawlak",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 5,
        username: "doingdiane",
        displayName: "Diane Lee",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
];

export const mockMoreResultsData: User[] = [
    {
        id: 6,
        username: "greatwhite2000",
        displayName: "Ben Crespo",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 7,
        username: "lieutenant_of_singapore",
        displayName: "Elias Lai",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 8,
        username: "nyu123",
        displayName: "Nathan Yu",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 9,
        username: "japanese_raccoon",
        displayName: "Emily Ford",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 10,
        username: "turtle_lover_9000",
        displayName: "Connie Vi",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
    {
        id: 11,
        username: "hangukjangerbanger",
        displayName: "Justin Jang",
        profileUri:
            "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        trackSnapshots: true,
        shareSnapshots: true,
    },
];

export const mockIncomingRequestsData: User[] = [];

export const mockSentRequestsData: User[] = [];

export const mockSongData: Song[] = generateSongs();

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
        friends: mockFriendsData,
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
        snapshots: [],
        friends: mockFriendsData,
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
        snapshots: [],
        friends: mockFriendsData,
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
        snapshots: [],
        friends: mockFriendsData,
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
        snapshots: [],
        friends: mockFriendsData,
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
        snapshots: [],
        friends: mockFriendsData,
    },
];

export const mockPlaceData: Place[] = [
    {
        address: "1701 US-220, Stokesdale, NC 27357, United States",
        coords: { latitude: 36.2950075, longitude: -79.93951609999999 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.00269965978543496,
        name: "Piccadilly Curcus Pizza",
        placeId: "ChIJGX1Md_z7UogRxyjC419VOc8",
    },
    {
        address: "4664 US Hwy 13 S, Mt Olive, NC 28365, United States",
        coords: { latitude: 35.2925724, longitude: -78.2195376 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.00269965978543496,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJGZ3TMxb1q4kRUvY4KcLI4kU",
    },
    {
        address: "Piccadilly, Wilson, NC 27893, USA",
        coords: { latitude: 35.7413339, longitude: -77.8892463 },
        latitudeDelta: 0.003976999999999009,
        longitudeDelta: 0.00439699999999732,
        name: "Piccadilly",
        placeId: "ChIJz_0ayNadrokR5Go7bkxgQxM",
    },
    {
        address: "206 W Trade St, Calypso, NC 28325, United States",
        coords: { latitude: 35.1549399, longitude: -78.1071284 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJweEmSW_7q4kRmqAH1kuSc8Y",
    },
    {
        address: "2212 Indian Springs Rd, Dudley, NC 28333, United States",
        coords: { latitude: 35.2260239, longitude: -77.9870679 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJ6Szm4hX9q4kRDfyMvtVuwa8",
    },
    {
        address: "104 NC-403, Mt Olive, NC 28365, United States",
        coords: { latitude: 35.1691375, longitude: -78.01503029999999 },
        latitudeDelta: 0.00269965978543496,
        longitudeDelta: 0.00269965978543496,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJT2g1Op39q4kRHoS2rJ3lKkA",
    },
    {
        address: "4373 NC-111 S, Seven Springs, NC 28578, United States",
        coords: { latitude: 35.2019224, longitude: -77.8879485 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJ0XXjye9XqYkRo8Be2g1QJr8",
    },
    {
        address: "2059 NC-11 # 55, Kinston, NC 28504, United States",
        coords: { latitude: 35.2358127, longitude: -77.6265975 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.00269965978543496,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJ7W__mslLqYkRtnbkSNlxfIg",
    },
    {
        address: "2828 Raeford Rd, Fayetteville, NC 28303, United States",
        coords: { latitude: 35.0455501, longitude: -78.92690850000001 },
        latitudeDelta: 0.0026996597854562765,
        longitudeDelta: 0.002699659785449171,
        name: "The Piccadilly Circus",
        placeId: "ChIJF0QS7VYTq4kRUC9N5S1vOvk",
    },
    {
        address: "4981 Richlands Hwy, Jacksonville, NC 28540, United States",
        coords: { latitude: 34.8111393, longitude: -77.51181989999999 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.00269965978543496,
        name: "Piccadilly Circus Pizza",
        placeId: "ChIJc0ibwTwTqYkR3ZASELRy5WQ",
    },
    {
        address: "3117 Franklin Rd SW Ste 5, Roanoke, VA 24014, United States",
        coords: { latitude: 37.2445372, longitude: -79.96372099999999 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.00269965978543496,
        name: "Pilates at Piccadilly",
        placeId: "ChIJs_hreVMNTYgRTFl-IHvo6RE",
    },
    {
        address: "4800 I-55 Suite 1, Jackson, MS 39211, United States",
        coords: { latitude: 32.3613091, longitude: -90.14960049999999 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJVz8i4VXNKYYREW-Gi9JajC4",
    },
    {
        address:
            "1600-A, Matthews-Mint Hill Rd, Matthews, NC 28105, United States",
        coords: { latitude: 35.1191041, longitude: -80.695754 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.002699659785449171,
        name: "Picadeli's Pub-In-Deli",
        placeId: "ChIJR1-cl3UkVIgRE7gp0DQlzvY",
    },
    {
        address: "533 Lapalco Blvd, Gretna, LA 70056, United States",
        coords: { latitude: 29.8791077, longitude: -90.0326853 },
        latitudeDelta: 0.002699659785438513,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJ6xBCndSgIIYRlq-SojylV4A",
    },
    {
        address: "5474 Essen Ln, Baton Rouge, LA 70809, United States",
        coords: { latitude: 30.3995962, longitude: -91.10750089999999 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJ87Ia2ESkJoYRnl7Nmdqt_x0",
    },
    {
        address: "27156 Crossing Cir, Denham Springs, LA 70726, United States",
        coords: { latitude: 30.4643813, longitude: -90.9232614 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJlxeeZ0S_JoYR37BYBSwuBAI",
    },
    {
        address: "7201 Piccadilly Ave, St. Louis, MO 63143, United States",
        coords: { latitude: 38.6042681, longitude: -90.3153409 },
        latitudeDelta: 0.0026996597854420656,
        longitudeDelta: 0.00269965978543496,
        name: "The Piccadilly at Manhattan",
        placeId: "ChIJb4f1w2bK2IcRLpqBSMF_Vt8",
    },
    {
        address: "6406 Florida Blvd, Baton Rouge, LA 70806, United States",
        coords: { latitude: 30.4507366, longitude: -91.1246008 },
        latitudeDelta: 0.002699659785438513,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJOdF1YOijJoYRmoyW7FCRvcc",
    },
    {
        address: "5179 Plank Rd, Baton Rouge, LA 70805, United States",
        coords: { latitude: 30.4963552, longitude: -91.1557658 },
        latitudeDelta: 0.002699659785449171,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJh2y1g5WhJoYR7M-etz0HzlQ",
    },
    {
        address:
            "3332 S Sherwood Forest Blvd, Baton Rouge, LA 70816, United States",
        coords: { latitude: 30.4227199, longitude: -91.0523748 },
        latitudeDelta: 0.002699659785438513,
        longitudeDelta: 0.002699659785449171,
        name: "Piccadilly Restaurants",
        placeId: "ChIJvWObB1G7JoYRP5KKTnjeLLE",
    },
];
