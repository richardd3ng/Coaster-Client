import { useMemo } from "react";

import { View } from "react-native";

import MapIconButton from "../mapIconButton/MapIconButton";
import { SnapshotPrivacy } from "../../../gql/graphql";
import styles from "./styles";
import { useMapContext } from "../../../hooks/context/MapContext";
import { useJamMemModal } from "../../../hooks/context/ModalContext";

const SocialFilterStack: React.FC = () => {
    const { clusterFilter, setClusterFilter } = useMapContext();
    const { value: selectedJamMemId } = useJamMemModal();

    const createFilterHandler = (value: SnapshotPrivacy) => () => {
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
        { name: "person", filter: SnapshotPrivacy.Me },
        { name: "people", filter: SnapshotPrivacy.Friends },
        { name: "globe-2", filter: SnapshotPrivacy.Everyone },
    ];

    return useMemo(() => {
        if (selectedJamMemId !== undefined) return null;

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
