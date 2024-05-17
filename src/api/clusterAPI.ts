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

export const fetchClusters = (
    points: PointFeature<SongPoint>[],
    zoomLevel: ZoomLevel
): SongCluster[] => {
    const start = Date.now();

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

    index.load(points);

    const clusters = index.getClusters([-180, -90, 180, 90], zoomLevel);
    const res: SongCluster[] = [];

    const loopStart = Date.now();
    for (const item of clusters) {
        if ("properties" in item && "top10Songs" in item.properties) {
            const cluster = item as ClusterFeature<{
                top10Songs: Map<number, number>;
            }>;
            res.push({
                coords: {
                    latitude: cluster.geometry.coordinates[1],
                    longitude: cluster.geometry.coordinates[0],
                },
                top10Songs: cluster.properties.top10Songs,
            });
        } else {
            const point = item as PointFeature<SongPoint>;
            res.push({
                coords: {
                    latitude: point.geometry.coordinates[1],
                    longitude: point.geometry.coordinates[0],
                },
                top10Songs: new Map([[point.properties.songId, 1]]),
            });
        }
    }
    const loopEnd = Date.now();

    const end = Date.now();
    console.log(`Loop took: ${loopEnd - loopStart} ms`);
    console.log(
        `Fetched ${res.length} clusters, total time: ${end - start} ms`
    );

    return res;
};
