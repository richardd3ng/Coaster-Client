import { createContext, useContext, useState, ReactNode } from "react";

import { DateFilter, ClusterFilter } from "../../types/filters";
import {
    DEFAULT_DATE_FILTER,
    DEFAULT_CLUSTER_FILTER,
    DEFAULT_SOCIAL_FILTER,
} from "../../constants/defaults";
import { SnapshotPrivacy } from "../../gql/graphql";

interface MapContextType {
    dateFilter: DateFilter;
    setDateFilter: (filter: DateFilter) => void;
    socialFilter: SnapshotPrivacy;
    setSocialFilter: (filter: SnapshotPrivacy) => void;
    clusterFilter: ClusterFilter;
    setClusterFilter: (filter: ClusterFilter) => void;
    followsUserLocation: boolean;
    setFollowsUserLocation: (follows: boolean) => void;
}

const MapContext = createContext<MapContextType>({
    dateFilter: DEFAULT_DATE_FILTER,
    setDateFilter: () => {},
    socialFilter: DEFAULT_SOCIAL_FILTER,
    setSocialFilter: () => {},
    clusterFilter: DEFAULT_CLUSTER_FILTER,
    setClusterFilter: () => {},
    followsUserLocation: true,
    setFollowsUserLocation: () => {},
});

export const MapContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [dateFilter, setDateFilter] =
        useState<DateFilter>(DEFAULT_DATE_FILTER);
    const [socialFilter, setSocialFilter] = useState<SnapshotPrivacy>(
        DEFAULT_SOCIAL_FILTER
    );
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
                socialFilter,
                setSocialFilter,
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
