import { useMemo } from "react";

import { View } from "react-native";

import { useMapContext } from "../../../hooks/context/MapContext";
import MapIconButton from "../mapIconButton/MapIconButton";
import { SocialFilter } from "../../../types/custom";
import styles from "./styles";

const RightButtonPanel = () => {
    const {
        followsUserLocation,
        setFollowsUserLocation,
        socialFilter,
        setSocialFilter,
    } = useMapContext();

    const NavButton = useMemo(
        () => (
            <MapIconButton
                name="navigation-2"
                onPress={() => setFollowsUserLocation(!followsUserLocation)}
                filled={followsUserLocation}
            />
        ),
        [followsUserLocation]
    );

    const SocialFilterStack = useMemo(
        () => (
            <View style={styles.buttonStack}>
                <MapIconButton
                    name="person"
                    onPress={() => setSocialFilter(SocialFilter.ME)}
                    filled={socialFilter === SocialFilter.ME}
                />
                <MapIconButton
                    name="people"
                    onPress={() => setSocialFilter(SocialFilter.FRIENDS)}
                    filled={socialFilter === SocialFilter.FRIENDS}
                />
                <MapIconButton
                    name="globe-2"
                    onPress={() => setSocialFilter(SocialFilter.GLOBAL)}
                    filled={socialFilter === SocialFilter.GLOBAL}
                />
            </View>
        ),
        [socialFilter]
    );

    return (
        <View style={styles.buttonContainer}>
            {NavButton}
            {SocialFilterStack}
        </View>
    );
};

export default RightButtonPanel;
