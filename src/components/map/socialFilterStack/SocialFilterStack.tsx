import { useMemo } from "react";

import { View } from "react-native";

import MapIconButton from "../mapIconButton/MapIconButton";
import { SocialFilter } from "../../../types/custom";
import styles from "./styles";
import { useMapContext } from "../../../hooks/context/MapContext";

const SocialFilterStack: React.FC = () => {
    const { socialFilter, setSocialFilter } = useMapContext();

    return useMemo(() => {
        return (
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
        );
    }, [socialFilter]);
};

export default SocialFilterStack;
