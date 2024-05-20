import { createContext, useContext, useState, ReactNode } from "react";

import { DateFilter, SocialFilter } from "../../types/custom";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_SOCIAL_FILTER,
} from "../../utils/defaults";

interface MapContextType {
    dateFilter: DateFilter;
    setDateFilter: (filter: DateFilter) => void;
    socialFilter: SocialFilter;
    setSocialFilter: (filter: SocialFilter) => void;
    followsUserLocation: boolean;
    setFollowsUserLocation: (follows: boolean) => void;
}

const MapContext = createContext<MapContextType>({
    dateFilter: DEFAULT_DATE_FILTER,
    setDateFilter: () => {},
    socialFilter: DEFAULT_SOCIAL_FILTER,
    setSocialFilter: () => {},
    followsUserLocation: true,
    setFollowsUserLocation: () => {},
});

export const MapContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [dateFilter, setDateFilter] =
        useState<DateFilter>(DEFAULT_DATE_FILTER);
    const [socialFilter, setSocialFilter] = useState<SocialFilter>(
        DEFAULT_SOCIAL_FILTER
    );
    const [followsUserLocation, setFollowsUserLocation] =
        useState<boolean>(true);

    return (
        <MapContext.Provider
            value={{
                dateFilter,
                setDateFilter,
                socialFilter,
                setSocialFilter,
                followsUserLocation,
                setFollowsUserLocation,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export const useMapContext = () => useContext<MapContextType>(MapContext);
