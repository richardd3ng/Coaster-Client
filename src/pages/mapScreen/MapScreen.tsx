import { useEffect, useMemo, useState } from "react";

import MapView from "react-native-maps";
import { Text, View } from "react-native";

import { DateFilter, MapRegion, SocialFilter } from "../../types/custom";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_SOCIAL_FILTER,
} from "../../utils/defaults";
import { EXPO_DEV_MODE } from "@env";
import MapBottomSheet from "../../components/map/bottomSheet/MapBottomSheet";
import MapContext from "../../context/MapContext";
import MapIconButton from "../../components/map/MapIconButton";
import { ModalProvider } from "../../context/ModalContext";
import ProfileBottomModal from "../../components/map/profile/ProfileBottomModal";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import { BottomSheetProvider } from "../../context/BottomSheetContext";

const MapScreen = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const [region, setRegion] = useState<MapRegion>(null);
    const [followsUserLocation, setFollowsUserLocation] =
        useState<boolean>(true);
    const [dateFilter, setDateFilter] =
        useState<DateFilter>(DEFAULT_DATE_FILTER);
    const [socialFilter, setSocialFilter] = useState<SocialFilter>(
        DEFAULT_SOCIAL_FILTER
    );

    useEffect(() => {
        if (location) {
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        }
    }, []);

    const NavButton = useMemo(
        () => (
            <MapIconButton
                name="navigation-2"
                onPress={() => setFollowsUserLocation(!followsUserLocation)}
                filled={followsUserLocation}
            />
        ),
        [followsUserLocation]
    );

    const SocialFilterStack = useMemo(
        () => (
            <View style={styles.buttonStack}>
                <MapIconButton
                    name="person"
                    onPress={() => setSocialFilter(SocialFilter.ME)}
                    filled={socialFilter === SocialFilter.ME}
                />
                <MapIconButton
                    name="people"
                    onPress={() => setSocialFilter(SocialFilter.FRIENDS)}
                    filled={socialFilter === SocialFilter.FRIENDS}
                />
                <MapIconButton
                    name="globe-2"
                    onPress={() => setSocialFilter(SocialFilter.GLOBAL)}
                    filled={socialFilter === SocialFilter.GLOBAL}
                />
            </View>
        ),
        [socialFilter]
    );

    const BottomSheet = useMemo(
        () => (
            <BottomSheetProvider>
                <ModalProvider>
                    <MapContext.Provider
                        value={{
                            dateFilter,
                            socialFilter,
                            followsUserLocation,
                            setFollowsUserLocation,
                            region,
                            setRegion,
                        }}
                    >
                        <MapBottomSheet />
                    </MapContext.Provider>
                    <ProfileBottomModal />
                </ModalProvider>
            </BottomSheetProvider>
        ),
        []
    );

    return (
        <>
            <View style={styles.mapContainer}>
                {location && region ? (
                    <MapView
                        style={styles.map}
                        region={region}
                        showsUserLocation={true}
                        followsUserLocation={followsUserLocation}
                        onRegionChange={setRegion}
                        onPanDrag={() => setFollowsUserLocation(false)}
                    />
                ) : (
                    <Text>Loading...</Text>
                    // TODO: Loading Spinner
                )}
                <View style={styles.buttonContainer}>
                    {NavButton}
                    {SocialFilterStack}
                </View>
            </View>
            {BottomSheet}
        </>
    );
};

export default MapScreen;
