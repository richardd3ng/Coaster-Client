import { CurrentLocationState } from "../state/location/currentLocationSlice";

export const isValidLocationState = (
    location: CurrentLocationState
): boolean => {
    return location.coords !== null && location.timestamp !== null;
};
