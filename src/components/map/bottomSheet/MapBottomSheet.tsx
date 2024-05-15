import React, {
    ReactNode,
    useCallback,
    useMemo,
    useRef,
    useState,
} from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "@ui-kitten/components";

import MapBottomSheetContext from "../../../context/mapBottomSheetContext";
import { ModalType, useModal } from "../../../context/modalContext";
import { PlaceData, fetchGeoData } from "../../../utils/locationUtils";
import ProfileIconButton from "../profile/ProfileIconButton";
import styles from "./styles";
import SearchBar from "../../shared/SearchBar";
import SearchResultsList from "../search/SearchResultsList";

interface MapBottomSheetProps {
    children: ReactNode;
}

const mockData: PlaceData[] = [
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

const MapBottomSheet: React.FC<MapBottomSheetProps> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const searchBarInputRef = useRef<Input>(null);
    const snapPoints = useMemo(() => ["10%", "30%", "92.5%"], []);
    const [snapPointIndex, setSnapPointIndex] = useState<number>(0);
    const [searchResults, setSearchResults] = useState<PlaceData[] | null>(
        null
    );
    const [showProfile, setShowProfile] = useState<boolean>(true);
    const { presentModal } = useModal();

    const handleSearch = useCallback(async (query: string) => {
        const results = await fetchGeoData(query);
        setSearchResults(results);
        // setSearchResults(mockData);
        setSnapPointIndex(2);
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        searchBarInputRef.current?.clear();
        setSnapPointIndex(index);
        if (index !== 2) {
            searchBarInputRef.current?.blur();
            searchBarInputRef.current?.clear();
            setSearchResults(null);
            setShowProfile(true);
        }
    }, []);

    const resetBottomSheet = useCallback(() => {
        searchBarInputRef.current?.clear();
        setSearchResults(null);
        setSnapPointIndex(1);
    }, []);

    const handleFocus = useCallback(() => {
        setShowProfile(false);
        setSnapPointIndex(2);
    }, []);

    const CancelButton = () => {
        return (
            <TouchableOpacity
                onPress={resetBottomSheet}
                style={{ alignSelf: "center" }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: "blue",
                    }}
                >
                    Cancel
                </Text>
            </TouchableOpacity>
        );
    };

    const TopRow = (
        <View style={styles.bottomSheetTopRow}>
            <View
                style={{
                    width: showProfile ? "90%" : "87.5%",
                }}
            >
                <SearchBar
                    ref={searchBarInputRef}
                    placeholder="Search Location, Song, or Artist"
                    onSearch={handleSearch}
                    style={styles.bottomSheetTextInput}
                    onFocus={handleFocus}
                    onClear={() => setSearchResults(null)}
                />
            </View>
            {showProfile ? (
                <ProfileIconButton
                    onPress={() => presentModal(ModalType.Profile)}
                    style={styles.profileIconButton}
                />
            ) : (
                <CancelButton />
            )}
        </View>
    );

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheet
                ref={bottomSheetRef}
                index={snapPointIndex}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                handleStyle={styles.bottomSheetHandle}
            >
                {TopRow}
                {searchResults ? (
                    <MapBottomSheetContext.Provider
                        value={{
                            snapPointIndex,
                            setSnapPointIndex,
                        }}
                    >
                        <SearchResultsList
                            results={searchResults}
                        ></SearchResultsList>
                    </MapBottomSheetContext.Provider>
                ) : (
                    children
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;