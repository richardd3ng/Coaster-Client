import { useCallback } from "react";

import { Image, View } from "react-native";
import { Marker, Callout } from "react-native-maps";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import { dispatchSetSelectedCluster } from "../../../state/storeUtils";
import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getImageStyle } from "./styles";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    cluster,
}: ClusterMarkerProps) => {
    const { width, height } = getImageStyle(cluster.size);
    const { dismiss, present, setSnapIndex } = useModal();
    const { close } = useBottomSheet();
    // decide on styling based on the size of the cluster

    const handlePress = useCallback((cluster: SongCluster) => {
        dispatchSetSelectedCluster(cluster);
        dismiss(ModalType.Friends);
        dismiss(ModalType.JamMem);
        close(BottomSheetType.Map);
        present(ModalType.Cluster);
        setSnapIndex(ModalType.Cluster, 1);
    }, []);

    return (
        <Marker coordinate={cluster.coords} tracksViewChanges={false}>
            <Callout
                style={styles.callout}
                onPress={() => handlePress(cluster)}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../../../../assets/icon.png")}
                        style={styles.image}
                    />
                </View>
            </Callout>
        </Marker>
    );
};

export default ClusterMarker;
