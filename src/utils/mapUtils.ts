import { Dimensions } from "react-native";
import GeoViewport, { BoundingBox } from "@mapbox/geo-viewport";
import { Region } from "react-native-maps";

const { height, width } = Dimensions.get("window");

export const MAP_CONFIG = {
    minZoom: 1,
    maxZoom: 16,
};

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
