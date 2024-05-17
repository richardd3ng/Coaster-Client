import { LatLng } from "react-native-maps";
import Supercluster, { ClusterFeature, PointFeature } from "supercluster";

import { ZoomLevel } from "../utils/mapUtils";

export interface SongCluster {
    coords: LatLng;
    top10Songs: Map<number, number>; // id, count
}

export interface SongPoint {
    songId: number;
}

const index = new Supercluster({
    map: (props: SongPoint) => ({
        top10Songs: new Map([[props.songId, 1]]),
    }),
    reduce: (accumulated, props) => {
        const top10Songs = accumulated.top10Songs || new Map();
        props.top10Songs.forEach((count, songId) => {
            if (top10Songs.has(songId)) {
                top10Songs.set(songId, top10Songs.get(songId)! + count);
            } else {
                top10Songs.set(songId, count);
            }
        });
        accumulated.top10Songs = top10Songs;
    },
    maxZoom: 9,
});

export const loadPoints = (points: PointFeature<SongPoint>[]) => {
    const start = Date.now();
    index.load(points);
    console.log("Loaded points in", Date.now() - start, "ms");
};

export const fetchClusters = (zoomLevel: ZoomLevel): SongCluster[] => {
    const start = Date.now();
    const clusters = index
        .getClusters([-180, -90, 180, 90], zoomLevel)
        .map((item) => {
            if ("properties" in item && "top10Songs" in item.properties) {
                const cluster = item as ClusterFeature<{
                    top10Songs: Map<number, number>;
                }>;
                return {
                    coords: {
                        latitude: cluster.geometry.coordinates[1],
                        longitude: cluster.geometry.coordinates[0],
                    },
                    top10Songs: cluster.properties.top10Songs,
                };
            } else {
                const point = item as PointFeature<SongPoint>;
                return {
                    coords: {
                        latitude: point.geometry.coordinates[1],
                        longitude: point.geometry.coordinates[0],
                    },
                    top10Songs: new Map([[point.properties.songId, 1]]),
                };
            }
        });
    console.log(
        `Fetched ${clusters.length} clusters, total time: ${
            Date.now() - start
        } ms`
    );

    return clusters;
};
