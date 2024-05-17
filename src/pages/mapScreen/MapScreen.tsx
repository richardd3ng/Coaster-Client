import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Text } from "react-native";
import { EXPO_DEV_MODE } from "@env";
import { fetchClusters } from "../../api/clusterAPI";
import { mockPoints } from "../../mockData/constants";
import MapContext, { MapContextType } from "../../context/MapContext";
import { SongCluster } from "../../api/clusterAPI";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import {
    computeDeltaFromZoomLevel,
    computeZoomLevelFromRegion,
    getNearestZoomLevel,
    ZoomLevel,
} from "../../utils/mapUtils";
import { DEFAULT_ZOOM_LEVEL } from "../../utils/defaults";
import ClusterMarker from "../../components/map/ClusterMarker";

const MemoizedMarker = React.memo(({ cluster }: { cluster: SongCluster }) => (
    <ClusterMarker cluster={cluster} />
));

const MapScreen = () => {
    const location = useTracking(EXPO_DEV_MODE === "false");
    const { region, setRegion, followsUserLocation, setFollowsUserLocation } =
        useContext<MapContextType>(MapContext);
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
                <MemoizedMarker key={i} cluster={c} />
            ))}
        </MapView>
    ) : (
        <Text>Loading...</Text>
        // TODO: Loading Spinner
    );
};

export default MapScreen;
