import { useContext, useEffect, useState } from "react";

import MapView, { LatLng, Marker, Region } from "react-native-maps";
import { Dimensions, Text } from "react-native";

import ClusterMarker from "../../components/map/ClusterMarker";
import { EXPO_DEV_MODE } from "@env";
import { generateRandomPoints } from "../../mockData/scripts";
import MapContext, { MapContextType } from "../../context/MapContext";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import {
    ZoomLevel,
    computeDeltaFromZoomLevel,
    computeZoomLevelFromRegion,
    getNearestZoomLevel,
} from "../../utils/mapUtils";

const MapScreen = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const { region, setRegion, followsUserLocation, setFollowsUserLocation } =
        useContext<MapContextType>(MapContext);
    // const [cluster, setCluster] = useState<any>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(ZoomLevel.LEVEL_1);

    useEffect(() => {
        if (location) {
            const delta = computeDeltaFromZoomLevel(zoomLevel);
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: delta,
                longitudeDelta: delta,
            });
        }
    }, []);

    useEffect(() => {
        if (region) {
            const newZoomLevel = getNearestZoomLevel(
                computeZoomLevelFromRegion(region)
            );
            console.log("zoomLevel:", newZoomLevel);
            if (newZoomLevel !== zoomLevel) {
                console.log("fetching new clusters");
            }
            setZoomLevel(newZoomLevel);
        }
    }, [region]);

    return location && region ? (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}
            followsUserLocation={followsUserLocation}
            onRegionChangeComplete={setRegion}
            onPanDrag={() => setFollowsUserLocation(false)}
        >
            {/* {generateRandomPoints(location, 0.01, 1000).map(
                (c: LatLng, i: number) => (
                    <Marker
                        key={i}
                        coordinate={{
                            latitude: c.latitude,
                            longitude: c.longitude,
                        }}
                    />
                )
            )} */}
        </MapView>
    ) : (
        <Text>Loading...</Text>
        // TODO: Loading Spinner
    );
};

export default MapScreen;
