import React, { useCallback, useMemo, useRef, useState } from "react";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { Input } from "@ui-kitten/components";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../context/BottomSheetContext";
import JamMemsCarousel from "../../jamMems/JamMemsCarousel";
import { mockPlaceData } from "../../../mockData/constants";
import { ModalType, useModal } from "../../../context/ModalContext";
import { PlaceData, fetchGeoData } from "../../../utils/locationUtils";
import ProfileIconButton from "../profile/ProfileIconButton";
import styles from "./styles";
import SearchBar from "../../shared/SearchBar";
import SearchResultsList from "../search/SearchResultsList";

const MapBottomSheet: React.FC = () => {
    const searchBarInputRef = useRef<Input>(null);
    const snapPoints = useMemo(() => ["10%", "35%", "92.5%"], []);
    const [searchResults, setSearchResults] = useState<PlaceData[] | null>(
        null
    );
    const [showProfile, setShowProfile] = useState<boolean>(true);
    const { presentModal } = useModal();
    const { bottomSheetRefs, snapIndexes, setSnapIndex } = useBottomSheet();

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
                            <Text style={styles.text}>Jam Mems</Text>
                            <JamMemsCarousel />
                        </View>
                    </BottomSheetScrollView>
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
