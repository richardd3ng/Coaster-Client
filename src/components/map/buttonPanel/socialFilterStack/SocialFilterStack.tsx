import { useMemo } from "react";

import { useSelector } from "react-redux";
import { View } from "react-native";

import { dispatchClearHistory } from "../../../../state/storeUtils";
import { INVALID_JAM_MEM_ID } from "../../../../state/jamMem/jamMemSlice";
import MapIconButton from "../mapIconButton/MapIconButton";
import { RootState } from "../../../../state/store";
import { SocialFilter } from "../../../../types/filters";
import styles from "./styles";
import { useMapContext } from "../../../../hooks/context/MapContext";

const SocialFilterStack: React.FC = () => {
    const { clusterFilter, setClusterFilter } = useMapContext();

    const selectedJamMemId = useSelector((state: RootState) => {
        return state.jamMem.selectedJamMemId;
    });

    return useMemo(() => {
        return (
            selectedJamMemId === INVALID_JAM_MEM_ID && (
                <View style={styles.buttonStack}>
                    <MapIconButton
                        name="person"
                        onPress={() =>
                            setClusterFilter({
                                type: "social",
                                value: SocialFilter.Me,
                            })
                        }
                        filled={clusterFilter.value === SocialFilter.Me}
                    />
                    <MapIconButton
                        name="people"
                        onPress={() => {
                            setClusterFilter({
                                type: "social",
                                value: SocialFilter.Friends,
                            });
                            dispatchClearHistory();
                        }}
                        filled={clusterFilter.value === SocialFilter.Friends}
                    />
                    <MapIconButton
                        name="globe-2"
                        onPress={() =>
                            setClusterFilter({
                                type: "social",
                                value: SocialFilter.Global,
                            })
                        }
                        filled={clusterFilter.value === SocialFilter.Global}
                    />
                </View>
            )
        );
    }, [clusterFilter, selectedJamMemId]);
};

export default SocialFilterStack;
