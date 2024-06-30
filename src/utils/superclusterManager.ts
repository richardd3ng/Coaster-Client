import Supercluster, { ClusterFeature, PointFeature } from "supercluster";
import { ClusterFilter, SocialFilter } from "../types/filters";
import { LatLng } from "react-native-maps";
import { BoundingBox } from "@mapbox/geo-viewport";
import { MAP_CONFIG } from "./mapUtils";

const TOP_SONGS_COUNT = 10;

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

    private meSupercluster: Supercluster<SongPointProps, SongClusterProps>;
    private friendsSupercluster: Supercluster<SongPointProps, SongClusterProps>;
    private globalSupercluster: Supercluster<SongPointProps, SongClusterProps>;
    private jamMemSuperclusters: Map<
        number,
        Supercluster<SongPointProps, SongClusterProps>
    >;

    options = {
        map: (props: SongPointProps): SongClusterProps => ({
            songs: new Map([[props.songId, 1]]),
        }),
        reduce: (accumulated: SongClusterProps, props: SongClusterProps) => {
            const songs = accumulated.songs || new Map();
            props.songs.forEach((count, songId) => {
                if (songs.has(songId)) {
                    songs.set(songId, songs.get(songId)! + count);
                } else {
                    songs.set(songId, count);
                }
            });
            accumulated.songs = songs;
        },
        maxZoom: MAP_CONFIG.maxZoom,
    };

    private constructor() {
        this.meSupercluster = new Supercluster(this.options);
        this.friendsSupercluster = new Supercluster(this.options);
        this.globalSupercluster = new Supercluster(this.options);
        this.jamMemSuperclusters = new Map();
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
        if (filter.type === "social") {
            switch (filter.value) {
                case SocialFilter.Global:
                    this.globalSupercluster.load(points);
                    break;
                case SocialFilter.Me:
                    this.meSupercluster.load(points);
                    break;
                case SocialFilter.Friends:
                    this.friendsSupercluster.load(points);
                    break;
            }
        } else if (filter.type === "jamMem") {
            if (!this.jamMemSuperclusters.has(filter.value)) {
                this.jamMemSuperclusters.set(
                    filter.value,
                    new Supercluster(this.options)
                );
            }
            this.jamMemSuperclusters.get(filter.value)!.load(points);
        }
        console.log("Loaded data in", Date.now() - start, "ms");
    };

    public getClusters = (
        bBox: BoundingBox,
        zoom: number,
        filter: ClusterFilter
    ): SongCluster[] => {
        const index = this.getSuperclusterInstance(filter);
        const clusters = index.getClusters(bBox, zoom).map((item) => {
            if (item.properties.point_count > 1) {
                const cluster = item as ClusterFeature<SongClusterProps>;
                return {
                    coords: {
                        latitude: cluster.geometry.coordinates[1],
                        longitude: cluster.geometry.coordinates[0],
                    },
                    topSongs: Array.from(cluster.properties.songs.entries())
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, TOP_SONGS_COUNT) as SongIdFrequencies,
                    size: cluster.properties.point_count,
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
        if (filter.type === "social") {
            switch (filter.value) {
                case SocialFilter.Me:
                    return this.meSupercluster;
                case SocialFilter.Friends:
                    return this.friendsSupercluster;
                case SocialFilter.Global:
                    return this.globalSupercluster;
            }
        } else if (filter.type === "jamMem") {
            return (
                this.jamMemSuperclusters.get(filter.value) ||
                new Supercluster(this.options)
            );
        }
        throw new Error("Invalid filter type");
    };
}

export default SuperclusterManager.getInstance();
