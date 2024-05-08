import { useCallback } from "react";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GeocoderResponse } from "../../utils/locationUtils";
import styles from "./styles";
import { Text, View } from "react-native";

// TODO: this might not be needed actually

interface SearchResultsListProps {
    results: GeocoderResponse[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = (
    props: SearchResultsListProps
) => {
    const renderItem = useCallback(
        ({ item }: { item: GeocoderResponse }) => (
            <View style={styles.searchResultsItemContainer}>
                <Text>{item.address}</Text>
            </View>
        ),
        []
    );

    return (
        <BottomSheetFlatList
            data={props.results}
            keyExtractor={(geocoderResponse) => geocoderResponse.placeId}
            renderItem={renderItem}
            contentContainerStyle={styles.searchResultsContentContainer}
        />
    );
};

export default SearchResultsList;
