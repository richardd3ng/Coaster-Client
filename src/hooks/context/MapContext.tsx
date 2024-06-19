import { createContext, useContext, useState, ReactNode } from "react";

import { DateFilter, ClusterFilter, SocialFilter } from "../../types/filters";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_CLUSTER_FILTER,
} from "../../constants/defaults";

interface MapContextType {
    dateFilter: DateFilter;
    setDateFilter: (filter: DateFilter) => void;
    clusterFilter: ClusterFilter;
    setClusterFilter: (filter: ClusterFilter) => void;
    followsUserLocation: boolean;
    setFollowsUserLocation: (follows: boolean) => void;
}

const MapContext = createContext<MapContextType>({
    dateFilter: DEFAULT_DATE_FILTER,
    setDateFilter: () => {},
    clusterFilter: { type: "social", value: SocialFilter.Global },
    setClusterFilter: () => {},
    followsUserLocation: true,
    setFollowsUserLocation: () => {},
});

export const MapContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [dateFilter, setDateFilter] =
        useState<DateFilter>(DEFAULT_DATE_FILTER);
    const [clusterFilter, setClusterFilter] = useState<ClusterFilter>(
        DEFAULT_CLUSTER_FILTER
    );
    const [followsUserLocation, setFollowsUserLocation] =
        useState<boolean>(true);

    return (
        <MapContext.Provider
            value={{
                dateFilter,
                setDateFilter,
                clusterFilter,
                setClusterFilter,
                followsUserLocation,
                setFollowsUserLocation,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};

export const useMapContext = () => useContext<MapContextType>(MapContext);
