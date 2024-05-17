import { Dimensions } from "react-native";
import { Region } from "react-native-maps";

const { height, width } = Dimensions.get("window");

export enum ZoomLevel {
    LEVEL_1 = 1,
    LEVEL_2,
    LEVEL_3,
    LEVEL_4,
    LEVEL_5,
    LEVEL_6,
    LEVEL_7,
    LEVEL_8,
    LEVEL_9,
}

export const ZOOM_LEVELS: Record<ZoomLevel, number> = {
    [ZoomLevel.LEVEL_1]: 0.5,
    [ZoomLevel.LEVEL_2]: 0.1,
    [ZoomLevel.LEVEL_3]: 0.05,
    [ZoomLevel.LEVEL_4]: 0.01,
    [ZoomLevel.LEVEL_5]: 0.005,
    [ZoomLevel.LEVEL_6]: 0.001,
    [ZoomLevel.LEVEL_7]: 0.0005,
    [ZoomLevel.LEVEL_8]: 0.0001,
    [ZoomLevel.LEVEL_9]: 0.00005,
};

export const computeZoomLevelFromRegion = (region: Region): number => {
    return Math.max(
        region.latitudeDelta / height,
        region.longitudeDelta / width
    );
};

export const computeDeltaFromZoomLevel = (zoomLevel: ZoomLevel): number => {
    return ZOOM_LEVELS[zoomLevel] * width;
};

export const getNearestZoomLevel = (zoom: number): ZoomLevel => {
    let nearestZoomLevel: ZoomLevel = ZoomLevel.LEVEL_1;
    let minDifference = Math.abs(ZOOM_LEVELS[ZoomLevel.LEVEL_1] - zoom);

    Object.values(ZoomLevel).forEach((value) => {
        const level = value as ZoomLevel;
        const currentZoomLevel = ZOOM_LEVELS[level];
        const difference = Math.abs(currentZoomLevel - zoom);
        if (difference < minDifference) {
            nearestZoomLevel = level;
            minDifference = difference;
        }
    });

    return nearestZoomLevel;
};
