import { useMemo } from "react";

import { View } from "react-native";

import MapIconButton from "../mapIconButton/MapIconButton";
import { SocialFilter } from "../../../../types/custom";
import styles from "./styles";
import { useMapContext } from "../../../../hooks/context/MapContext";
import { dispatchClearHistory } from "../../../../state/storeUtils";

const SocialFilterStack: React.FC = () => {
    const { socialFilter, setSocialFilter } = useMapContext();

    return useMemo(() => {
        return (
            <View style={styles.buttonStack}>
                <MapIconButton
                    name="person"
                    onPress={() => setSocialFilter(SocialFilter.Me)}
                    filled={socialFilter === SocialFilter.Me}
                />
                <MapIconButton
                    name="people"
                    onPress={() => {
                        setSocialFilter(SocialFilter.Friends);
                        dispatchClearHistory();
                    }}
                    filled={socialFilter === SocialFilter.Friends}
                />
                <MapIconButton
                    name="globe-2"
                    onPress={() => setSocialFilter(SocialFilter.Global)}
                    filled={socialFilter === SocialFilter.Global}
                />
            </View>
        );
    }, [socialFilter]);
};

export default SocialFilterStack;
