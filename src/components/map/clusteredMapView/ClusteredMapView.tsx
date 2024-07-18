import { useCallback, useEffect, useRef } from "react";

import MapView from "react-native-maps";

import ClusterMarker from "../../clusters/clusterMarker/ClusterMarker";
import { dispatchSetCurrentRegion } from "../../../state/storeUtils";
import { isEqualClusters } from "../../../utils/snapshotUtils";
import LoadingModal from "../../shared/loadingModal/LoadingModal";
import { SongCluster } from "../../../utils/superclusterManager";
import styles from "./styles";
import {
    useCurrentLocation,
    useCurrentRegion,
} from "../../../hooks/redux/useSelectorHooks";
import {
    useClusterModal,
    useFriendsModal,
} from "../../../hooks/context/ModalContext";
import useClusters from "../../../hooks/useClusters";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
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

    const {
        present: presentClusterModal,
        setSnapIndex: setClusterModalSnapIndex,
        options: clusterModalOptions,
    } = useClusterModal();
    const { dismiss: dismissFriendsModal } = useFriendsModal();
    const { close: closeMapBottomSheet } = useMapBottomSheet();
    const selectedCluster: SongCluster | undefined =
        clusterModalOptions?.selectedCluster;

    const handleClusterPress = useCallback(
        (cluster: SongCluster) => {
            dismissFriendsModal();
            closeMapBottomSheet();
            presentClusterModal({ selectedCluster: cluster });
            setClusterModalSnapIndex(1);
        },
        [dismissFriendsModal, closeMapBottomSheet, presentClusterModal]
    );

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
                    showsCompass={false}
                >
                    {clusters.map((cluster: SongCluster, index: number) => (
                        <ClusterMarker
                            key={index}
                            cluster={cluster}
                            isSelected={
                                selectedCluster
                                    ? isEqualClusters(cluster, selectedCluster)
                                    : false
                            }
                            onPress={() => handleClusterPress(cluster)}
                        />
                    ))}
                </MapView>
            )}
            <LoadingModal visible={isLoading} text="Loading Clusters..." />
        </>
    );
};

export default ClusteredMapView;
