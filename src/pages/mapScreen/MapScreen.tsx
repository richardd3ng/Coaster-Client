import { useContext, useEffect, useRef, useState } from "react";

import MapView, { Region } from "react-native-maps";
import { Text } from "react-native";

import { DEFAULT_LOCATION } from "../../utils/defaults";
import { EXPO_DEV_MODE } from "@env";
import MapContext, { MapContextType } from "../../hooks/context/MapContext";
import { SongCluster } from "../../utils/superclusterManager";
import styles from "./styles";
import useTracking from "../../hooks/useTracking";
import ClusterMarker from "../../components/map/clusterMarker/ClusterMarker";
import { calculateBBox, getMapZoom } from "../../utils/mapUtils";
import superclusterManager from "../../utils/superclusterManager";

const MapScreen = () => {
    const location =
        EXPO_DEV_MODE === "true" ? DEFAULT_LOCATION : useTracking(true);
    const {
        region,
        setRegion,
        followsUserLocation,
        setFollowsUserLocation,
        socialFilter,
    } = useContext<MapContextType>(MapContext);
    const isInitialized = useRef(false);
    const [clusters, setClusters] = useState<SongCluster[]>([]);

    useEffect(() => {
        if (location && !isInitialized.current) {
            const initialRegion: Region = {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            };
            setRegion(initialRegion);
            isInitialized.current = true;
        }
    }, [location, setRegion]);

    useEffect(() => {
        if (region) {
            const bBox = calculateBBox(region);
            const zoom = getMapZoom(region, bBox, 1);
            setClusters(
                superclusterManager.getClusters(socialFilter, bBox, zoom)
            );
        }
    }, [region, socialFilter]);

    return location && region ? (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation={true}
            followsUserLocation={followsUserLocation}
            onRegionChangeComplete={setRegion}
            onPanDrag={() => setFollowsUserLocation(false)}
        >
            {clusters.map((cluster: SongCluster, index: number) => (
                <ClusterMarker key={index} cluster={cluster} />
            ))}
        </MapView>
    ) : (
        <Text>Loading...</Text>
        // TODO: Loading Spinner
    );
};

export default MapScreen;
