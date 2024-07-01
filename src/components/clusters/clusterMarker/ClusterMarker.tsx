import React, { useCallback } from "react";
import { Marker } from "react-native-maps";
import { Icon } from "@ui-kitten/components";
import { Platform, View } from "react-native";

import {
    BottomSheetType,
    useBottomSheet,
} from "../../../hooks/context/BottomSheetContext";
import { ModalType, useModal } from "../../../hooks/context/ModalContext";
import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getIconStyle } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { dispatchSetSelectedCluster } from "../../../state/storeUtils";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    cluster,
}: ClusterMarkerProps) => {
    const { width, height, backgroundColor } = getIconStyle(cluster.size);
    const { dismiss, present, setSnapIndex } = useModal();
    const { close } = useBottomSheet();
    const selectedCluster = useSelector(
        (state: RootState) => state.cluster.selectedCluster
    );

    const handlePress = useCallback(
        (cluster: SongCluster) => {
            dispatchSetSelectedCluster(cluster);
            dismiss(ModalType.Friends);
            close(BottomSheetType.Map);
            present(ModalType.Cluster);
            setSnapIndex(ModalType.Cluster, 1);
        },
        [dismiss, close, present, setSnapIndex]
    );

    const shadowStyle = Platform.select({
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
