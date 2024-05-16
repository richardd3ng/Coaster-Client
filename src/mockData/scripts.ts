import { LatLng } from "react-native-maps";

export const generateRandomPoints = (
    center: LatLng,
    radius: number,
    numPoints: number
): LatLng[] => {
    const points: LatLng[] = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * radius;
        const latitude = center.latitude + distance * Math.sin(angle);
        const longitude = center.longitude + distance * Math.cos(angle);
        points.push({ latitude, longitude });
    }
    return points;
};
