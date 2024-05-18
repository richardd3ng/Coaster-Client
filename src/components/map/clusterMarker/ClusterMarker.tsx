import { memo } from "react";

import { Image, View } from "react-native";
import { Marker, Callout } from "react-native-maps";

import { SongCluster } from "../../../utils/superclusterManager";
import styles, { getImageStyle } from "./styles";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = (
    props: ClusterMarkerProps
) => {
    const { width, height } = getImageStyle(props.cluster.size);
    // decide on styling based on the size of the cluster
    return (
        <Marker coordinate={props.cluster.coords} tracksViewChanges={false}>
            <Callout
                style={styles.callout}
                onPress={() => console.log("Pressed:", props.cluster.topSongs)}
                onTouchCancel={() => console.log("Touch cancelled")}
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

export default memo(ClusterMarker);
