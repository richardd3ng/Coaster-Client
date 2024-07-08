import { RootState } from "../../state/store";
import { useSelector } from "react-redux";

export const useCurrentLocation = () => {
    return useSelector((state: RootState) => state.location.currentLocation);
};

export const useCurrentRegion = () => {
    return useSelector((state: RootState) => state.location.currentRegion);
};

export const useSelecteJamMemId = () => {
    return useSelector((state: RootState) => state.jamMem.selectedJamMemId);
}