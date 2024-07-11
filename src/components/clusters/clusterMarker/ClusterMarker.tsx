import { useCallback, useMemo } from "react";

import { Marker } from "react-native-maps";
import { Platform, View } from "react-native";
import { isEqual } from "lodash";

import ClusterPulseAnimation from "../clusterPulseAnimation/ClusterPulseAnimation";
import { DEFAULT_ALBUM_COVER_URI } from "../../../constants/assets";
import { dispatchSetSelectedCluster } from "../../../state/storeUtils";
import FastImage from "react-native-fast-image";
import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getIconStyle } from "./styles";
import {
    useClusterModal,
    useFriendsModal,
} from "../../../hooks/context/ModalContext";
import { useMapBottomSheet } from "../../../hooks/context/BottomSheetContext";
import { useSelectedCluster } from "../../../hooks/redux/useSelectorHooks";
import { useSong } from "../../../hooks/react-query/useQueryHooks";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    cluster,
}: ClusterMarkerProps) => {
    const { width, height } = getIconStyle(cluster.size);
    const {
        present: presentClusterModal,
        setSnapIndex: setClusterModalSnapIndex,
    } = useClusterModal();
    const { dismiss: dismissFriendsModal } = useFriendsModal();
    const { close: closeMapBottomSheet } = useMapBottomSheet();
    const selectedCluster = useSelectedCluster();
    const { data: song } = useSong(cluster.topSongs[0][0]);
    const isSelected = isEqual(selectedCluster, cluster);

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
                shadowRadius: isSelected ? 8 : 4,
                shadowOpacity: isSelected ? 0.6 : 0.4,
            },
            android: {
                elevation: isSelected ? 12 : 8,
            },
        });
    }, [isSelected]);

    return (
        <Marker
            coordinate={cluster.coords}
            tracksViewChanges={false}
            onPress={() => handlePress(cluster)}
        >
            <View
                style={{
                    width: width + 4,
                    height: height + 4,
                    borderRadius: width / 2,
                    opacity: isSelected ? 1.0 : 0.7,
                    ...shadowStyle,
                    ...styles.container,
                }}
            >
                <FastImage
                    source={
                        song && song.albumUrl
                            ? { uri: song.albumUrl }
                            : DEFAULT_ALBUM_COVER_URI
                    }
                    style={{
                        width,
                        height,
                        borderRadius: width,
                    }}
                />
                {isSelected && (
                    <View style={styles.animationContainer}>
                        <ClusterPulseAnimation
                            width={width + 64}
                            height={height + 64}
                        />
                    </View>
                )}
            </View>
        </Marker>
    );
};

export default ClusterMarker;
