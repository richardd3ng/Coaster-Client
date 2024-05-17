import React from "react";
import { Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { SongCluster } from "../../api/clusterAPI";

interface ClusterMarkerProps {
    cluster: SongCluster;
}

const ClusterMarker: React.FC<ClusterMarkerProps> = (
    props: ClusterMarkerProps
) => {
    return (
        <Marker coordinate={props.cluster.coords} tracksViewChanges={false}>
            <Callout>
                <Text>{`Top 10: ${mapToString(
                    props.cluster.top10Songs
                )}`}</Text>
            </Callout>
        </Marker>
    );
};

const mapToString = (map: Map<number, number>) => {
    if (!map) return "undefined";
    return Array.from(map.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
};

export default ClusterMarker;
