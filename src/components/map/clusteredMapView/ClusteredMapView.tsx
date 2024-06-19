import { useEffect, useRef } from "react";

import MapView from "react-native-maps";
import { ActivityIndicator, View } from "react-native";

import { calculateBBox, getMapZoom, MAP_CONFIG } from "../../../utils/mapUtils";
import ClusterMarker from "../../clusters/clusterMarker/ClusterMarker";
import { dispatchSetCurrentRegion } from "../../../state/storeUtils";
import { SongCluster } from "../../../utils/superclusterManager";
import styles from "./styles";
import superclusterManager from "../../../utils/superclusterManager";
import {
    useCurrentLocation,
    useCurrentRegion,
} from "../../../hooks/redux/useSelectorHooks";
import { useMapContext } from "../../../hooks/context/MapContext";
import useTracking from "../../../hooks/useTracking";
import useClusters from "../../../hooks/useClusters";

const ClusteredMapView = () => {
    const [_tracking, setTracking] = useTracking();
    const { followsUserLocation, setFollowsUserLocation, clusterFilter } =
        useMapContext();
    const isInitialized = useRef(false);
    const location = useCurrentLocation();
    const region = useCurrentRegion();
    const { clusters, setClusters, isLoading } = useClusters(
        region,
        clusterFilter
    );

    useEffect(() => {
        setTracking(true);
    }, []);

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
            console.log("setting clusters");
            setClusters(
                superclusterManager.getClusters(bBox, zoom, clusterFilter)
            );
        }
    }, [region, clusterFilter]);

    return location && region && !isLoading ? (
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
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default ClusteredMapView;
