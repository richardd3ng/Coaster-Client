import React, {
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useRef,
    useState,
} from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import { Input } from "@ui-kitten/components";

import { getGeoData } from "../../utils/locationUtils";
import styles from "./styles";
import SearchBar from "../shared/SearchBar";
import ProfileIconButton from "./ProfileIconButton";
import MapContext, { MapContextType } from "../../context/mapContext";

interface MapBottomSheetProps {
    children: ReactNode;
}

const MapBottomSheet: React.FC<MapBottomSheetProps> = ({ children }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const searchBarInputRef = useRef<Input>(null);
    const snapPoints = useMemo(() => ["10%", "30%", "95%"], []);
    const [snapPointIndex, setSnapPointIndex] = useState<number>(0);
    const { setRegion, setFollowsUserLocation } =
        useContext<MapContextType>(MapContext);

    const handleSearch = useCallback(async (query: string) => {
        const result = await getGeoData(query);
        if (result) {
            setRegion({
                latitude: result.coords.latitude,
                longitude: result.coords.longitude,
                latitudeDelta: result.latitudeDelta,
                longitudeDelta: result.longitudeDelta,
            });
            setFollowsUserLocation(false);
        }
        setSnapPointIndex(0);
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        searchBarInputRef.current?.clear();
        setSnapPointIndex(index);
        if (index !== 2) {
            searchBarInputRef.current?.blur();
        }
    }, []);

    const TopRow = (
        <View style={styles.bottomSheetTopRow}>
            <View style={styles.bottomSheetTextInputContainer}>
                <SearchBar
                    ref={searchBarInputRef}
                    placeholder="Search Location"
                    onSearch={handleSearch}
                    style={styles.bottomSheetTextInput}
                    onFocus={() => setSnapPointIndex(2)}
                />
            </View>
            <View style={styles.bottomSheetProfileIconButtonContainer}>
                <ProfileIconButton
                    onPress={() => console.log("pressed profile")}
                />
            </View>
        </View>
    );

    return (
        <GestureHandlerRootView style={styles.bottomSheetContainer}>
            <BottomSheet
                ref={bottomSheetRef}
                index={snapPointIndex}
                onChange={handleSheetChanges}
                snapPoints={snapPoints}
                handleStyle={styles.bottomSheetHandle}
            >
                {TopRow}
                {children}
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

export default MapBottomSheet;
