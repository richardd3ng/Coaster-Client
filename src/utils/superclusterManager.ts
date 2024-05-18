import Supercluster, { ClusterFeature, PointFeature } from "supercluster";
import { SocialFilter } from "../types/custom";
import {
    fetchSongPointsMe,
    fetchSongPointsGlobal,
    fetchSongPointsFriends,
} from "../api/clusterAPI";
import { LatLng } from "react-native-maps";
import { BoundingBox } from "@mapbox/geo-viewport";

export interface SongCluster {
    coords: LatLng;
    topSongs: number[][]; // [id, count]
}

export interface SongPoint {
    songId: number;
}

class SuperclusterManager {
    private static instance: SuperclusterManager;

    private meSupercluster: Supercluster;
    private friendsSupercluster: Supercluster;
    private globalSupercluster: Supercluster;

    options = {
        map: (props: SongPoint) => ({
            songs: new Map([[props.songId, 1]]),
        }),
        reduce: (
            accumulated: { songs: Map<number, number> },
            props: { songs: Map<number, number> }
        ) => {
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
        maxZoom: 10,
    };

    private constructor() {
        this.meSupercluster = new Supercluster(this.options);
        this.friendsSupercluster = new Supercluster(this.options);
        this.globalSupercluster = new Supercluster(this.options);
    }

    public static getInstance = (): SuperclusterManager => {
        if (!SuperclusterManager.instance) {
            SuperclusterManager.instance = new SuperclusterManager();
        }
        return SuperclusterManager.instance;
    };

    public loadData = async () => {
        console.log("Loading data...");
        const start = Date.now();
        const [mePoints, friendsPoints, globalPoints] = await Promise.all([
            fetchSongPointsMe(),
            fetchSongPointsFriends(),
            fetchSongPointsGlobal(),
        ]);
        this.meSupercluster.load(mePoints);
        this.friendsSupercluster.load(friendsPoints);
        this.globalSupercluster.load(globalPoints);
        console.log("Loaded data in", Date.now() - start, "ms");
    };

    private getSuperclusterInstance = (filter: SocialFilter): Supercluster => {
        switch (filter) {
            case SocialFilter.ME:
                return this.meSupercluster;
            case SocialFilter.FRIENDS:
                return this.friendsSupercluster;
            case SocialFilter.GLOBAL:
                return this.globalSupercluster;
            default:
                throw new Error("Unknown filter type");
        }
    };

    public getClusters = (
        filter: SocialFilter,
        bBox: BoundingBox,
        zoom: number
    ): SongCluster[] => {
        const start = Date.now();
        const index = this.getSuperclusterInstance(filter);
        const clusters = index.getClusters(bBox, zoom).map((item) => {
            if ("properties" in item && "songs" in item.properties) {
                const cluster = item as ClusterFeature<{
                    songs: Map<number, number>;
                }>;
                return {
                    coords: {
                        latitude: cluster.geometry.coordinates[1],
                        longitude: cluster.geometry.coordinates[0],
                    },
                    topSongs: Array.from(cluster.properties.songs.entries())
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 10),
                };
            } else {
                const point = item as PointFeature<SongPoint>;
                return {
                    coords: {
                        latitude: point.geometry.coordinates[1],
                        longitude: point.geometry.coordinates[0],
                    },
                    topSongs: [[point.properties.songId, 1]],
                };
            }
        });
        return clusters;
    };
}

export default SuperclusterManager.getInstance();
