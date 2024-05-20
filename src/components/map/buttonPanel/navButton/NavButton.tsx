import { useCallback, useMemo } from "react";

import MapIconButton from "../mapIconButton/MapIconButton";
import {
    getCurrentLocationState,
    getCurrentRegionState,
    dispatchSetCurrentRegion,
} from "../../../../state/storeUtils";
import { useMapContext } from "../../../../hooks/context/MapContext";

const NavButton: React.FC = () => {
    const { followsUserLocation, setFollowsUserLocation } = useMapContext();

    const handlePress = useCallback(() => {
        const location = getCurrentLocationState();
        const region = getCurrentRegionState();
        if (location && region) {
            dispatchSetCurrentRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
            });
        }
        setFollowsUserLocation(!followsUserLocation);
    }, [followsUserLocation, setFollowsUserLocation, dispatchSetCurrentRegion]);

    return useMemo(
        () => (
            <MapIconButton
                name="navigation-2"
                onPress={handlePress}
                filled={followsUserLocation}
            />
        ),
        [followsUserLocation]
    );
};

export default NavButton;
