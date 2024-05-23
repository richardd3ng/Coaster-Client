import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";
import { Text, View } from "react-native";

import CustomPressable from "../../../../shared/customPressable/CustomPressable";
import { PlaceData } from "../../../../../api/locationAPI";
import SearchResultListItem from "../searchResultListItem/SearchResultListItem";
import styles from "./styles";

interface SearchResultsListProps {
    results: PlaceData[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({
    results,
}: SearchResultsListProps) => {
    const renderItem = useCallback(
        ({ item }: { item: PlaceData }) => <SearchResultListItem item={item} />,
        []
    );

    const LocationsHeader: React.FC = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.locationsText}>Locations</Text>
                <CustomPressable
                    style={styles.moreTextButton}
                    onPress={() => console.log("show more locations")}
                >
                    <Text style={styles.moreText}>More</Text>
                </CustomPressable>
            </View>
        );
    };

    return (
        <>
            <LocationsHeader />
            <Divider style={styles.divider} />
            <BottomSheetFlatList
                data={results}
                keyExtractor={(result) => result.placeId}
                renderItem={renderItem}
            />
        </>
    );
};

export default SearchResultsList;
