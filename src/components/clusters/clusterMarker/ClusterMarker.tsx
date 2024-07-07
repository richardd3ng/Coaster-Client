import { useCallback, useMemo } from "react";

import { Icon } from "@ui-kitten/components";
import { Marker } from "react-native-maps";
import { Platform, View } from "react-native";
import { useSelector } from "react-redux";

import { dispatchSetSelectedCluster } from "../../../state/storeUtils";
import { RootState } from "../../../state/store";
import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getIconStyle } from "./styles";
import {
    useClusterModal,
    useFriendsModal,
} from "../../../hooks/context/ModalContext";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    cluster,
}: ClusterMarkerProps) => {
    const { width, height, backgroundColor } = getIconStyle(cluster.size);
    const {
        present: presentClusterModal,
        setSnapIndex: setClusterModalSnapIndex,
    } = useClusterModal();
    const { dismiss: dismissFriendsModal } = useFriendsModal();
    const { close: closeMapBottomSheet } = useMapBottomSheet();
    const selectedCluster = useSelector(
        (state: RootState) => state.cluster.selectedCluster
    );

    const handlePress = useCallback(
        (cluster: SongCluster) => {
            dispatchSetSelectedCluster(cluster);
            dismissFriendsModal();
            closeMapBottomSheet();
            presentClusterModal();
            setClusterModalSnapIndex(1);
        },
        [
            dispatchSetSelectedCluster,
            dismissFriendsModal,
            closeMapBottomSheet,
            presentClusterModal,
            setClusterModalSnapIndex,
        ]
    );

    const shadowStyle = useMemo(() => {
        return Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: selectedCluster === cluster ? 8 : 4,
                shadowOpacity: selectedCluster === cluster ? 0.6 : 0.4,
            },
            android: {
                elevation: selectedCluster === cluster ? 12 : 8,
            },
        });
    }, [selectedCluster, cluster]);

    return (
        <Marker
            coordinate={cluster.coords}
            tracksViewChanges={false}
            onPress={() => handlePress(cluster)}
        >
            <View
                style={{
                    width,
                    height,
                    borderRadius: width / 2,
                    backgroundColor,
                    opacity: selectedCluster === cluster ? 1.0 : 0.6,
                    ...shadowStyle,
                    ...styles.container,
                }}
            >
                <Icon
                    name="music"
                    style={{ width: width * 0.8, height: height * 0.8 }}
                    fill="black"
                />
            </View>
        </Marker>
    );
};

export default ClusterMarker;
