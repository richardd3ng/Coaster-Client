import { Dimensions } from "react-native";
import GeoViewport, { BoundingBox } from "@mapbox/geo-viewport";
import { Region } from "react-native-maps";

const { height, width } = Dimensions.get("window");

export const MAP_CONFIG = {
    minZoom: 1,
    maxZoom: 16,
};

/**
 * Calculate the bounding box of a region
 * @param region The region to calculate the bounding box for
 * @returns The bounding box of the region
 */
export const calculateBBox = (region: Region): BoundingBox => {
    const longitudeDelta =
        region.longitudeDelta < 0
            ? region.longitudeDelta + 360
            : region.longitudeDelta;

    return [
        region.longitude - longitudeDelta,
        region.latitude - region.latitudeDelta,
        region.longitude + longitudeDelta,
        region.latitude + region.latitudeDelta,
    ];
};

/**
 * Calculate the zoom level of a region
 * @param region The region to calculate the zoom level for
 * @param bBox The bounding box of the region
 * @param minZoom The minimum zoom level
 * @returns The zoom level of the region
 */
export const getMapZoom = (
    region: Region,
    bBox: BoundingBox,
    minZoom: number
) => {
    const viewport =
        region.longitudeDelta >= 40
            ? { zoom: minZoom }
            : GeoViewport.viewport(bBox, [width, height]);

    return viewport.zoom;
};
