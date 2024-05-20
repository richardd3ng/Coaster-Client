import Supercluster, { ClusterFeature, PointFeature } from "supercluster";
import { SocialFilter } from "../types/custom";
import { fetchSongPoints } from "../api/clusterAPI";
import { LatLng } from "react-native-maps";
import { BoundingBox } from "@mapbox/geo-viewport";
import { MAP_CONFIG } from "./mapUtils";

const TOP_SONGS_COUNT = 10;

export interface SongCluster {
    coords: LatLng;
    topSongs: number[][]; // [id, frequency]
    size: number;
}

export interface SongPointProps {
    songId: number;
}

export interface SongClusterProps {
    songs: Map<number, number>; // [id, frequency]
}

class SuperclusterManager {
    private static instance: SuperclusterManager;

    private meSupercluster: Supercluster<SongPointProps, SongClusterProps>;
    private friendsSupercluster: Supercluster<SongPointProps, SongClusterProps>;
    private globalSupercluster: Supercluster<SongPointProps, SongClusterProps>;

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
            fetchSongPoints(SocialFilter.ME),
            fetchSongPoints(SocialFilter.FRIENDS),
            fetchSongPoints(SocialFilter.GLOBAL),
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
        const index = this.getSuperclusterInstance(filter);
        const clusters = index.getClusters(bBox, zoom).map((item) => {
            if (item.properties.point_count > 1) {
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
                        .slice(0, TOP_SONGS_COUNT),
                    size: cluster.properties.point_count,
                };
            } else {
                const point = item as PointFeature<SongPointProps>;
                return {
                    coords: {
                        latitude: point.geometry.coordinates[1],
                        longitude: point.geometry.coordinates[0],
                    },
                    topSongs: [[point.properties.songId, 1]],
                    size: 1,
                };
            }
        });
        return clusters;
    };
}

export default SuperclusterManager.getInstance();
