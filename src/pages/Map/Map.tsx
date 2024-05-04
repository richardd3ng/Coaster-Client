import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MapView, { Region } from "react-native-maps";

import { EXPO_DEV_MODE } from "@env";
import styles from "./styles";
import { isValidLocationState } from "../../utils/locationUtils";
import useTracking from "../../hooks/useTracking";

const Map = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const [region, setRegion] = useState<Region>({
        latitude: location.latitude!,
        longitude: location.longitude!,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const recenterMap = () => {
        setRegion({
            latitude: location.latitude!,
            longitude: location.longitude!,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    };

    return (
        <View style={styles.container}>
            {isValidLocationState(location) ? (
                <MapView
                    style={styles.map}
                    region={region}
                    showsUserLocation={true}
                    followsUserLocation={true}
                />
            ) : (
                <Text>Loading...</Text>
            )}
            <TouchableOpacity onPress={recenterMap}>
                <Text>Recenter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Map;
