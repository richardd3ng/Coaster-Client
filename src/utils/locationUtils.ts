import { CurrentLocationState } from "../state/location/currentLocationSlice";

export const isValidLocationState = (
    location: CurrentLocationState
): boolean => {
    return (
        location.latitude !== null &&
        location.longitude !== null &&
        location.timestamp !== null
    );
};
