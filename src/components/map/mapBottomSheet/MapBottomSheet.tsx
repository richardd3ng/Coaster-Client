import { useCallback, useMemo, useRef, useState } from "react";

import { Alert, View } from "react-native";
import { AxiosError } from "axios";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Input } from "@ui-kitten/components";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import CancelTextPressable from "./search/cancelTextPressable/CancelTextPressable";
import createStyles from "./styles";
import { DEFAULT_SNAP_POINTS } from "../../../hooks/context/ModalContext";
import JamMemsStack from "../../jamMems/jamMemsStack/JamMemsStack";
import { Place, fetchPlaces } from "../../../api/placesAPI";
import ProfileIconButton from "../../profile/profileIconButton/ProfileIconButton";
import SearchBar from "../../shared/searchBar/SearchBar";
import SearchResultsList from "./search/searchResultsList/SearchResultsList";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const MapBottomSheet: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
    const searchBarInputRef = useRef<Input>(null);
    const snapPoints = useMemo(() => DEFAULT_SNAP_POINTS, []);
    const [searchResults, setSearchResults] = useState<Place[] | null>(null);
    const [showProfile, setShowProfile] = useState<boolean>(true);
    const {
        refs: bottomSheetRefs,
        snapIndexes,
        setSnapIndex,
    } = useBottomSheet();

    const clearSearch = useCallback(() => {
        searchBarInputRef.current?.blur();
        searchBarInputRef.current?.clear();
    }, []);

    const handleSearch = async (query: string) => {
        if (!searchBarInputRef.current?.isFocused()) {
            // attempt to fix the search bar debounce issue, not perfect
            return;
        }
        try {
            const results = await fetchPlaces(query);
            setSearchResults(results);
            setSnapIndex(BottomSheetType.Map, 2);
        } catch (error) {
            Alert.alert((error as AxiosError).message);
        }
    };

    const handleSheetChanges = useCallback((index: number) => {
        searchBarInputRef.current?.clear();
        setSnapIndex(BottomSheetType.Map, index);
        if (index !== 2) {
            clearSearch();
            setSearchResults(null);
            setShowProfile(true);
        }
    }, []);

    const resetBottomSheet = useCallback(() => {
        setShowProfile(true);
        clearSearch();
        setSearchResults(null);
        setSnapIndex(BottomSheetType.Map, 1);
    }, []);

    const handleFocus = useCallback(() => {
        setShowProfile(false);
        setSnapIndex(BottomSheetType.Map, 2);
    }, []);

    const TopRow = useMemo(
        () => (
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
                    <ProfileIconButton />
                ) : (
                    <CancelTextPressable onPress={resetBottomSheet} />
                )}
            </View>
        ),
        [showProfile]
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
                        <JamMemsStack />
                    </BottomSheetScrollView>
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
