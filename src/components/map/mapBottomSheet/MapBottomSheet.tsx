import { useCallback, useMemo, useRef, useState } from "react";

import * as ImagePicker from "expo-image-picker";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";

import ErrorView from "../../shared/errorView/ErrorView";
import LoadingView from "../../shared/loadingView/LoadingView";
import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import createStyles from "./styles";
import CustomPressable from "../../shared/customPressable/CustomPressable";
import {
    DEFAULT_SNAP_POINTS,
    ModalType,
    useModal,
} from "../../../hooks/context/ModalContext";
import JamMemsCarousel from "./jamMems/jamMemsCarousel/JamMemsCarousel";
import { mockPlaceData } from "../../../mockData/constants";
import { PlaceData, fetchGeoData } from "../../../api/locationAPI";
import SearchBar from "../../shared/searchBar/SearchBar";
import SearchResultsList from "./search/searchResultsList/SearchResultsList";
import IconButton from "../../shared/iconButton/IconButton";
import { useJamMemMetadatas } from "../../../hooks/react-query/useQueryHooks";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

const MapBottomSheet: React.FC = () => {
    const styles = useThemeAwareObject(createStyles);
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
    const {
        data: jamMemMetadatas,
        isLoading,
        isError,
        error,
        refetch,
    } = useJamMemMetadatas();

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
            <CustomPressable
                onPress={resetBottomSheet}
                style={styles.cancelButton}
            >
                <Text style={styles.cancelText}>Cancel</Text>
            </CustomPressable>
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
                    iconColor="royalblue"
                />
            ) : (
                <CancelButton />
            )}
        </View>
    );

    const JamMemsContent = isLoading ? (
        <LoadingView containerStyle={styles.loadingContainer} />
    ) : isError ? (
        <ErrorView
            message={error.message}
            onTryAgain={refetch}
            containerStyle={styles.errorContainer}
        />
    ) : jamMemMetadatas ? (
        <JamMemsCarousel jamMemMetadatas={jamMemMetadatas} />
    ) : null;

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result);
        } else {
            alert("You did not select any image.");
        }
    };

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
                            <Button
                                title="+ Jam Mem"
                                onPress={pickImage}
                            />
                            {JamMemsContent}
                        </View>
                    </BottomSheetScrollView>
                )}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
