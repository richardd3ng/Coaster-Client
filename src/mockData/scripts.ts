import Supercluster, { ClusterFeature, PointFeature } from "supercluster";

import { ZoomLevel } from "../utils/mapUtils";
import { SnapShot } from "../types/custom";
import { LatLng } from "react-native-maps";

interface SongPoint {
    songId: number;
}

export const generateRandomSnapshots = (
    numPoints: number
): PointFeature<SongPoint>[] => {
    const snapshots: PointFeature<SongPoint>[] = [];
    for (let i = 0; i < numPoints; i++) {
        const latitude = Math.random() * 180 - 90; // Random latitude between -90 and 90
        const longitude = Math.random() * 360 - 180; // Random longitude between -180 and 180
        snapshots.push({
            type: "Feature",
            properties: {
                songId: Math.floor(Math.random() * 10),
            },
            geometry: {
                type: "Point",
                coordinates: [longitude, latitude],
            },
        });
    }
    console.log("generated:", snapshots.length, "points");
    return snapshots;
};

export interface SongCluster {
    coords: LatLng;
    top10Songs: Map<number, number>; // id, count
}

export const fetchClusters = (
    points: PointFeature<SongPoint>[],
    zoomLevel: ZoomLevel
): SongCluster[] => {
    const index = new Supercluster<
        SongPoint,
        { top10Songs: Map<number, number> }
    >({
        map: (props: SongPoint) => ({
            top10Songs: new Map([[props.songId, 1]]),
        }),
        reduce: (accumulated, props) => {
            props.top10Songs.forEach((count, songId) => {
                accumulated.top10Songs.set(
                    songId,
                    (accumulated.top10Songs.get(songId) || 0) + count
                );
            });
            const sortedSongs = Array.from(accumulated.top10Songs.entries())
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10);
            accumulated.top10Songs = new Map(sortedSongs);
        },
        maxZoom: 9,
    });

    index.load(points);

    return index.getClusters([-180, -90, 180, 90], zoomLevel).map((item) => {
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
};
