import { useContext, useEffect, useState } from "react";

import MapView, { Callout, Marker, Region } from "react-native-maps";
import { Dimensions, Text } from "react-native";

import { SongCluster } from "../../mockData/scripts";
import ClusterMarker from "../../components/map/ClusterMarker";
import { EXPO_DEV_MODE } from "@env";
import { fetchClusters } from "../../mockData/scripts";
import { mockPoints } from "../../mockData/constants";
import MapContext, { MapContextType } from "../../context/MapContext";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import {
    ZoomLevel,
    computeDeltaFromZoomLevel,
    computeZoomLevelFromRegion,
    getNearestZoomLevel,
} from "../../utils/mapUtils";
import { DEFAULT_ZOOM_LEVEL } from "../../utils/defaults";

const MapScreen = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const { region, setRegion, followsUserLocation, setFollowsUserLocation } =
        useContext<MapContextType>(MapContext);
    // const [cluster, setCluster] = useState<any>(null);
    const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(DEFAULT_ZOOM_LEVEL);
    const [clusters, setClusters] = useState<SongCluster[]>([]);

    useEffect(() => {
        if (location) {
            const delta = computeDeltaFromZoomLevel(zoomLevel);
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: delta,
                longitudeDelta: delta,
            });
            setClusters(fetchClusters(mockPoints, zoomLevel));
        }
    }, []);

    useEffect(() => {
        if (region) {
            const newZoomLevel = getNearestZoomLevel(
                computeZoomLevelFromRegion(region)
            );
            if (newZoomLevel !== zoomLevel) {
                console.log(
                    "fetching new clusters at zoomLevel:",
                    newZoomLevel
                );
                setClusters(fetchClusters(mockPoints, newZoomLevel));
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
            {clusters.map((c: SongCluster, i: number) => (
                <Marker key={i} coordinate={c.coords} tracksViewChanges={false}>
                    <Callout>
                        <Text>{`Top 10: ${mapToString(c.top10Songs)}`}</Text>
                    </Callout>
                </Marker>
            ))}
        </MapView>
    ) : (
        <Text>Loading...</Text>
        // TODO: Loading Spinner
    );
};

const mapToString = (map: Map<number, number>) => {
    if (!map) return "undefined";
    return Array.from(map.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
};

export default MapScreen;
