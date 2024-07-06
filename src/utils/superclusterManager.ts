import { BoundingBox } from "@mapbox/geo-viewport";
import { LatLng } from "react-native-maps";
import Supercluster, { ClusterFeature, PointFeature } from "supercluster";

import { ClusterFilter } from "../types/filters";

import { MAP_CONFIG } from "./mapUtils";

const TOP_SONGS_COUNT = 20;

export type SongIdFrequencies = [string, number][]; // [id, frequency]

export interface SongCluster {
    coords: LatLng;
    topSongs: SongIdFrequencies;
    size: number;
}

export interface SongPointProps {
    songId: string;
}

export interface SongClusterProps {
    songs: Map<string, number>; // [id, frequency]
}

class SuperclusterManager {
    private static instance: SuperclusterManager;

    private superClusters: Map<
        string,
        Supercluster<SongPointProps, SongClusterProps>
    >;

    options = {
        map: (props: SongPointProps): SongClusterProps => ({
            songs: new Map([[props.songId, 1]]),
        }),
        reduce: (accumulated: SongClusterProps, props: SongClusterProps) => {
            const combinedFreqs = new Map(accumulated.songs);
            for (const [songId, frequency] of props.songs) {
                combinedFreqs.set(
                    songId,
                    (combinedFreqs.get(songId) || 0) + frequency
                );
            }
            accumulated.songs = combinedFreqs;
        },
        maxZoom: MAP_CONFIG.maxZoom,
    };

    private constructor() {
        this.superClusters = new Map();
    }

    public static getInstance = (): SuperclusterManager => {
        if (!SuperclusterManager.instance) {
            SuperclusterManager.instance = new SuperclusterManager();
        }
        return SuperclusterManager.instance;
    };

    public loadData = async (
        filter: ClusterFilter,
        points: PointFeature<SongPointProps>[]
    ) => {
        const start = Date.now();
        const filterKey = this.getFilterKey(filter);

        if (!this.superClusters.has(filterKey)) {
            this.superClusters.set(filterKey, new Supercluster(this.options));
        }
        this.superClusters.get(filterKey)!.load(points);

        console.log("Loaded data in", Date.now() - start, "ms");
    };

    public getClusters = (
        bBox: BoundingBox,
        zoom: number,
        filter: ClusterFilter
    ): SongCluster[] => {
        const index = this.getSuperclusterInstance(filter);
        const clusters = index.getClusters(bBox, zoom).map((item) => {
            if ((item.properties as any).point_count > 1) {
                const cluster = item as ClusterFeature<SongClusterProps>;
                return {
                    coords: {
                        latitude: cluster.geometry.coordinates[1],
                        longitude: cluster.geometry.coordinates[0],
                    },
                    topSongs: Array.from(cluster.properties.songs.entries())
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, TOP_SONGS_COUNT) as SongIdFrequencies,
                    size: (cluster.properties as any).point_count,
                };
            } else {
                const point = item as PointFeature<SongPointProps>;
                return {
                    coords: {
                        latitude: point.geometry.coordinates[1],
                        longitude: point.geometry.coordinates[0],
                    },
                    topSongs: [
                        [point.properties.songId, 1],
                    ] as SongIdFrequencies,
                    size: 1,
                };
            }
        });
        return clusters;
    };

    private getSuperclusterInstance = (filter: ClusterFilter): Supercluster => {
        const filterKey = this.getFilterKey(filter);
        const supercluster = this.superClusters.get(filterKey);
        if (!supercluster) {
            throw new Error(
                `No supercluster instance found for key: ${filterKey}`
            );
        }
        return supercluster;
    };

    private getFilterKey = (filter: ClusterFilter): string => {
        if (filter.type === "social") {
            return filter.value;
        } else if (filter.type === "jamMem") {
            return `jamMem-${filter.value}`;
        }
        throw new Error("Invalid filter type");
    };
}

export default SuperclusterManager.getInstance();
