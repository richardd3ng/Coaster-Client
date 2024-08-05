import { memo, useMemo } from "react";

import { Marker } from "react-native-maps";
import { Platform, View } from "react-native";

import ClusterPulseAnimation from "../clusterPulseAnimation/ClusterPulseAnimation";
import { DEFAULT_ALBUM_COVER_URI } from "../../../constants/assets";
import { isEqualClusters } from "../../../utils/snapshotUtils";
import FastImage from "react-native-fast-image";
import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getIconStyle } from "./styles";
import { useSong } from "../../../hooks/react-query/useQueryHooks";

interface ClusterMarkerProps {
    cluster: SongCluster;
    isSelected: boolean;
    onPress: () => void;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = ({
    cluster,
    isSelected,
    onPress,
}: ClusterMarkerProps) => {
    const { width, height } = getIconStyle(cluster.size);
    const { data: song } = useSong(cluster.topSongs[0][0]);

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
            onPress={onPress}
        >
            <View
                style={{
                    width: width + 4,
                    height: height + 4,
                    borderRadius: (width + 4) / 2,
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
                            width={width * 2.5}
                            height={height * 2.5}
                        />
                    </View>
                )}
            </View>
        </Marker>
    );
};

export default memo(ClusterMarker, (prevProps, nextProps) => {
    return (
        prevProps.isSelected === nextProps.isSelected &&
        isEqualClusters(prevProps.cluster, nextProps.cluster)
    );
});
