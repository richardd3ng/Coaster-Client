import { useCallback, useMemo, useRef, useState } from "react";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "@ui-kitten/components";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import JamMemsCarousel from "../../jamMems/jamMemsCarousel/JamMemsCarousel";
import { mockPlaceData } from "../../../mockData/constants";
import { PlaceData, fetchGeoData } from "../../../api/locationAPI";
import SearchBar from "../../shared/searchBar/SearchBar";
import SearchResultsList from "../search/searchResultsList/SearchResultsList";
import styles from "./styles";
import IconButton from "../../shared/iconButton/IconButton";

const MapBottomSheet: React.FC = () => {
    const searchBarInputRef = useRef<Input>(null);
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const [searchResults, setSearchResults] = useState<PlaceData[] | null>(
        null
    );
    const [showProfile, setShowProfile] = useState<boolean>(true);
    const { present } = useModal();
    const {
        refs: bottomSheetRefs,
        snapIndexes,
        setSnapIndex,
    } = useBottomSheet();

    const handleSearch = useCallback(async (query: string) => {
        const results = await fetchGeoData(query);
        setSearchResults(results);
        // setSearchResults(mockPlaceData);
        setSnapIndex(BottomSheetType.Map, 2);
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        searchBarInputRef.current?.clear();
        setSnapIndex(BottomSheetType.Map, index);
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
        setSnapIndex(BottomSheetType.Map, 1);
    }, []);

    const handleFocus = useCallback(() => {
        setShowProfile(false);
        setSnapIndex(BottomSheetType.Map, 2);
    }, []);

    const CancelButton: React.FC = () => {
        return (
            <TouchableOpacity
                onPress={resetBottomSheet}
                style={{ alignSelf: "center" }}
            >
                <Text style={styles.cancelText}>Cancel</Text>
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
                <IconButton
                    onPress={() => present(ModalType.Profile)}
                    style={styles.profileIconButton}
                    iconName="person"
                    iconColor="blue"
                />
            ) : (
                <CancelButton />
            )}
        </View>
    );

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheet
                ref={bottomSheetRefs[BottomSheetType.Map]}
                index={snapIndexes[BottomSheetType.Map]}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                handleStyle={styles.bottomSheetHandle}
            >
                {TopRow}
                {searchResults ? (
                    <SearchResultsList results={searchResults} />
                ) : (
                    <BottomSheetScrollView
                        contentContainerStyle={
                            styles.bottomSheetContentContainer
                        }
                        showsVerticalScrollIndicator
                    >
                        <View style={styles.jamSessionStack}>
                            <Text style={styles.headerText}>Jam Mems</Text>
                            <JamMemsCarousel />
                        </View>
                    </BottomSheetScrollView>
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
