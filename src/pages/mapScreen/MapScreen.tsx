import React, { useEffect, useMemo, useState } from "react";

import MapView from "react-native-maps";
import { Text, View } from "react-native";

import { DateFilter, MapRegion, SocialFilter } from "../../types/custom";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_SOCIAL_FILTER,
} from "../../utils/defaults";
import { EXPO_DEV_MODE } from "@env";
import SearchContext from "../../context/searchContext";
import MapIconButton from "../../components/map/MapIconButton";
import SearchBar from "../../components/map/SearchBar";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import MapBottomSheet from "../../components/map/MapBottomSheet";

const Map = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const [region, setRegion] = useState<MapRegion>(null);
    const [followUserLocation, setFollowUserLocation] = useState<boolean>(true);
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

    const navButton = useMemo(
        () => (
            <MapIconButton
                name="navigation-2"
                onPress={() => setFollowUserLocation(!followUserLocation)}
                filled={followUserLocation}
            />
        ),
        [followUserLocation]
    );

    const socialFilterStack = useMemo(
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

    return (
        <View style={styles.mapContainer}>
            {location && region ? (
                <MapView
                    style={styles.map}
                    region={region}
                    showsUserLocation={true}
                    followsUserLocation={followUserLocation}
                    onRegionChange={setRegion}
                    onPanDrag={() => setFollowUserLocation(false)}
                />
            ) : (
                <Text>Loading...</Text>
                // TODO: Loading Spinner
            )}
            <View style={styles.searchBarContainer}>
                <SearchBar
                    placeholder="Search Location"
                    onSearch={console.log}
                />
            </View>
            <View style={styles.buttonContainer}>
                {navButton}
                {socialFilterStack}
            </View>
            {/* <MapBottomSheet>
                <SearchContext.Provider
                    value={{
                        socialFilter,
                        dateFilter,
                        region,
                        setRegion,
                    }}
                    // TODO: bottom modal content
                ></SearchContext.Provider>
            </MapBottomSheet> */}
            <MapBottomSheet/>
        </View>
    );
};

export default Map;
