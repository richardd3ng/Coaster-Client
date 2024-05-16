import { Dimensions } from "react-native";
import { Region } from "react-native-maps";

const { height, width } = Dimensions.get("window");

export enum ZoomLevel {
    LEVEL_1 = 0.00005,
    LEVEL_2 = 0.0001,
    LEVEL_3 = 0.0005,
    LEVEL_4 = 0.001,
    LEVEL_5 = 0.005,
    LEVEL_6 = 0.01,
    LEVEL_7 = 0.05,
    LEVEL_8 = 0.1,
    LEVEL_9 = 0.5,
}

type ZoomLevelType = { [key in keyof typeof ZoomLevel]: number };

export const computeZoomLevelFromRegion = (region: Region): number => {
    return Math.max(
        region.latitudeDelta / height,
        region.longitudeDelta / width
    );
};

export const computeDeltaFromZoomLevel = (zoomLevel: ZoomLevel): number => {
    return zoomLevel * width;
};

export const getNearestZoomLevel = (zoom: number): ZoomLevel => {
    const zoomLevelValues = Object.values(
        ZoomLevel
    ) as ZoomLevelType[keyof ZoomLevelType][];

    return zoomLevelValues.reduce((prev, curr) =>
        Math.abs(curr - zoom) < Math.abs(prev - zoom) ? curr : prev
    ) as ZoomLevel;
};
