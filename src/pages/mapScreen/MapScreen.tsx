import { useEffect, useRef, useState } from "react";

import MapView from "react-native-maps";
import { Text } from "react-native";

import { MAP_CONFIG, calculateBBox, getMapZoom } from "../../utils/mapUtils";
import ClusterMarker from "../../components/map/clusterMarker/ClusterMarker";
import { useMapContext } from "../../hooks/context/MapContext";
import { SongCluster } from "../../utils/superclusterManager";
import styles from "./styles";
import superclusterManager from "../../utils/superclusterManager";

import useCurrentLocation from "../../hooks/useCurrentLocation";
import { dispatchSetCurrentRegion } from "../../state/storeUtils";
import useCurrentRegion from "../../hooks/useCurrentRegion";

const MapScreen = () => {
    const { followsUserLocation, setFollowsUserLocation, socialFilter } =
        useMapContext();
    const isInitialized = useRef(false);
    const [clusters, setClusters] = useState<SongCluster[]>([]);
    const location = useCurrentLocation();
    const region = useCurrentRegion();

    useEffect(() => {
        if (location && !isInitialized.current) {
            dispatchSetCurrentRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
            isInitialized.current = true;
        }
    }, [location, dispatchSetCurrentRegion]);

    useEffect(() => {
        if (region) {
            const bBox = calculateBBox(region);
            const zoom = getMapZoom(region, bBox, MAP_CONFIG.minZoom);
            setClusters(
                superclusterManager.getClusters(socialFilter, bBox, zoom)
            );
        }
    }, [region, socialFilter]);

    return location && region ? (
        <MapView
            style={styles.map}
            region={region}
            showsUserLocation
            followsUserLocation={followsUserLocation}
            onRegionChangeComplete={dispatchSetCurrentRegion}
            onPanDrag={() => setFollowsUserLocation(false)}
            showsCompass
            showsScale
            loadingEnabled
            showsMyLocationButton={false}
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
