import { createContext } from "react";

import { DateFilter, MapRegion, SocialFilter } from "../types/custom";
import { DEFAULT_DATE_FILTER, DEFAULT_SOCIAL_FILTER } from "../utils/defaults";

export interface MapContextType {
    dateFilter: DateFilter;
    socialFilter: SocialFilter;
    followsUserLocation: boolean;
    setFollowsUserLocation: (followsUser: boolean) => void;
    region: MapRegion;
    setRegion: (region: MapRegion) => void;
}

const MapContext = createContext<MapContextType>({
    dateFilter: DEFAULT_DATE_FILTER,
    socialFilter: DEFAULT_SOCIAL_FILTER,
    followsUserLocation: true,
    setFollowsUserLocation: () => {},
    region: null,
    setRegion: () => {},
});

export default MapContext;
