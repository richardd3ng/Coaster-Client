import React, { useEffect, useRef, useState } from "react";

import { EXPO_DEV_MODE } from "@env";
import MapView, { Region } from "react-native-maps";
import { Text, View } from "react-native";
import { isValidLocationState } from "../../utils/locationUtils";
import MapIconButton from "../../components/map/MapIconButton";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";

const Map = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const [region, setRegion] = useState<Region | null>(null);
    const [followUserLocation, setFollowUserLocation] = useState<boolean>(true);
    const mapRef = useRef<MapView>(null);

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

    return (
        <View style={styles.mapContainer}>
            {location && region ? (
                <MapView
                    ref={mapRef}
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
                <MapIconButton
                    onPress={() => setFollowUserLocation(!followUserLocation)}
                    filled={followUserLocation}
                />
            </View>
        </View>
    );
};

export default Map;
