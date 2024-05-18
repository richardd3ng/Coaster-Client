import React from "react";
import { Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { SongCluster } from "../../utils/superclusterManager";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = (
    props: ClusterMarkerProps
) => {
    return (
        <Marker coordinate={props.cluster.coords} tracksViewChanges={false}>
            <Callout>
                <Text>{`Top 10: ${arrayToString(
                    props.cluster.topSongs
                )}`}</Text>
            </Callout>
        </Marker>
    );
};

const arrayToString = (songs: number[][]) => {
    return songs.map((song) => `${song[0]}: ${song[1]}`).join(", ");
};

export default ClusterMarker;
