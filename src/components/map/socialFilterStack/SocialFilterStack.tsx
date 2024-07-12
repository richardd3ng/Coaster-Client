import { useMemo } from "react";

import { View } from "react-native";

import { INVALID_JAM_MEM_ID } from "../../../state/jamMem/jamMemSlice";
import MapIconButton from "../mapIconButton/MapIconButton";
import { SocialFilter } from "../../../types/filters";
import styles from "./styles";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useSelectedJamMemId } from "../../../hooks/redux/useSelectorHooks";

const SocialFilterStack: React.FC = () => {
    const { clusterFilter, setClusterFilter } = useMapContext();
    const selectedJamMemId = useSelectedJamMemId();

    const createFilterHandler = (value: SocialFilter) => () => {
        setClusterFilter({
            type: "social",
            value,
            searchFilter:
                "searchFilter" in clusterFilter
                    ? clusterFilter.searchFilter
                    : undefined,
        });
    };

    const filterButtons = [
        { name: "person", filter: SocialFilter.Me },
        { name: "people", filter: SocialFilter.Friends },
        { name: "globe-2", filter: SocialFilter.Global },
    ];

    return useMemo(() => {
        if (selectedJamMemId !== INVALID_JAM_MEM_ID) return null;

        return (
            <View style={styles.buttonStack}>
                {filterButtons.map(({ name, filter }) => (
                    <MapIconButton
                        key={name}
                        name={name}
                        onPress={createFilterHandler(filter)}
                        filled={clusterFilter.value === filter}
                    />
                ))}
            </View>
        );
    }, [clusterFilter, selectedJamMemId]);
};

export default SocialFilterStack;
