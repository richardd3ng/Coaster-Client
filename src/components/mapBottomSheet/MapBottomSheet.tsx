import { useCallback, useMemo, useRef, useState } from "react";

import { Alert, View } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import createStyles from "./styles";
import { DEFAULT_SNAP_POINTS } from "../../hooks/context/ModalContext";
import JamMemStack from "../jamMems/jamMemStack/JamMemStack";
import { searchByLocationSongOrArtist } from "../../api/searchAPI";
import ProfileIconButton from "../profile/profileIconButton/ProfileIconButton";
import SearchBar, { SearchBarRef } from "../shared/searchBar/SearchBar";
import { SearchResult } from "../../gql/graphql";
import SearchResultsList from "../mapBottomSheet/searchResultsList/SearchResultsList";
import { useMapBottomSheet } from "../../hooks/context/BottomSheetContext";
import useThemeAwareObject from "../../hooks/useThemeAwareObject";

const MapBottomSheet: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const searchBarRef = useRef<SearchBarRef>(null);
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const [searchResults, setSearchResults] = useState<SearchResult[] | null>(
        null
    );
    const { ref, snapIndex, setSnapIndex } = useMapBottomSheet();

    const handleSearch = async (query: string) => {
        try {
            const results = await searchByLocationSongOrArtist(query);
            if (searchBarRef.current?.getIsCancelled()) {
                return;
            }
            setSearchResults(results);
        } catch (error: any) {
            Alert.alert("Error", error.message);
        }
    };

    const handleSheetChanges = useCallback((index: number) => {
        setSnapIndex(index);
        if (index !== 2) {
            setSearchResults(null);
            searchBarRef.current?.cancel();
        }
    }, []);

    const handleCancel = useCallback(() => {
        setSearchResults(null);
        setSnapIndex(1);
    }, []);

    const ProfileIcon = useMemo(
        () => (
            <View style={styles.profileIconContainer}>
                <ProfileIconButton />
            </View>
        ),
        []
    );

    const TopRow = useMemo(
        () => (
            <View style={styles.bottomSheetTopRow}>
                <SearchBar
                    ref={searchBarRef}
                    placeholder="Search Location, Song, or Artist"
                    onSearch={handleSearch}
                    onFocus={() => setSnapIndex(2)}
                    onClear={() => setSearchResults(null)}
                    onCancel={handleCancel}
                    rightComponent={ProfileIcon}
                    style={styles.bottomSheetTextInput}
                />
            </View>
        ),
        []
    );

    return (
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
            <BottomSheet
                ref={ref}
                index={snapIndex}
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
                        <JamMemStack />
                    </BottomSheetScrollView>
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
