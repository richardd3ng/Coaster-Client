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
import useClusters from "../../../hooks/useClusters";
import { useMapContext } from "../../../hooks/context/MapContext";
import useServerSentEvents from "../../../hooks/useServerSentEvents";
import useTracking from "../../../hooks/useTracking";

const ClusteredMapView = () => {
    useTracking();
    useServerSentEvents();
    const { followsUserLocation, setFollowsUserLocation, clusterFilter } =
        useMapContext();
    const isInitialized = useRef(false);
    const location = useCurrentLocation();
    const region = useCurrentRegion();
    const { clusters, isLoading } = useClusters(region, clusterFilter);

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

    return (
        <>
            {location && region && (
                <MapView
                    style={styles.map}
                    region={region}
                    showsUserLocation
                    followsUserLocation={followsUserLocation}
                    onRegionChangeComplete={dispatchSetCurrentRegion}
                    onPanDrag={() => setFollowsUserLocation(false)}
                    showsScale
                    loadingEnabled
                    showsMyLocationButton={false}
                >
                    {clusters.map((cluster: SongCluster, index: number) => (
                        <ClusterMarker key={index} cluster={cluster} />
                    ))}
                </MapView>
            )}
            <LoadingModal visible={isLoading} text="Loading Clusters..." />
        </>
    );
};

export default ClusteredMapView;
