import { useEffect, useRef } from "react";

import MapView from "react-native-maps";

import ClusterMarker from "../../clusters/clusterMarker/ClusterMarker";
import { dispatchSetCurrentRegion } from "../../../state/storeUtils";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { SongCluster } from "../../../utils/superclusterManager";
import styles from "./styles";
import {
    useCurrentLocation,
    useCurrentRegion,
} from "../../../hooks/redux/useSelectorHooks";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useTrackingContext } from "../../../hooks/context/TrackingContext";
import useClusters from "../../../hooks/useClusters";
import useSnapshotBackground from "../../../hooks/useLocationPostingBackground";
import useLocationPostingForeground from "../../../hooks/useLocationPostingForeground";

const ClusteredMapView = () => {
    const { setTracking } = useTrackingContext();
    const { followsUserLocation, setFollowsUserLocation, clusterFilter } =
        useMapContext();
    const isInitialized = useRef(false);
    const location = useCurrentLocation();
    const region = useCurrentRegion();
    useLocationPostingForeground();
    useSnapshotBackground();
    const { clusters, isLoading } = useClusters(region, clusterFilter);

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
        <LoadingModal text="Loading Clusters..." />
    );
};

export default ClusteredMapView;
