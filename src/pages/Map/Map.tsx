import React, { useEffect, useMemo, useState } from "react";
import MapView, { Region } from "react-native-maps";
import { Text, View } from "react-native";
import { EXPO_DEV_MODE } from "@env";
import { isValidLocationState } from "../../utils/locationUtils";
import MapIconButton from "../../components/map/MapIconButton";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";

enum SocialFilter {
    ME,
    FRIENDS,
    GLOBAL,
}

const Map = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const [region, setRegion] = useState<Region | null>(null);
    const [followUserLocation, setFollowUserLocation] = useState<boolean>(true);
    const [filter, setFilter] = useState<SocialFilter>(SocialFilter.ME);

    useEffect(() => {
        if (isValidLocationState(location)) {
            setRegion({
                latitude: location.coords!.latitude,
                longitude: location.coords!.longitude,
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
                    onPress={() => setFilter(SocialFilter.ME)}
                    filled={filter === SocialFilter.ME}
                />
                <MapIconButton
                    name="people"
                    onPress={() => setFilter(SocialFilter.FRIENDS)}
                    filled={filter === SocialFilter.FRIENDS}
                />
                <MapIconButton
                    name="globe-2"
                    onPress={() => setFilter(SocialFilter.GLOBAL)}
                    filled={filter === SocialFilter.GLOBAL}
                />
            </View>
        ),
        [filter]
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
            )}
            <View style={styles.buttonContainer}>
                {navButton}
                {socialFilterStack}
            </View>
        </View>
    );
};

export default Map;
