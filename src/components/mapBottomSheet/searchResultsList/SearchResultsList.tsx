import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Divider } from "@ui-kitten/components";
import { Text, View } from "react-native";

import CustomPressable from "../../shared/customPressable/CustomPressable";
import createStyles from "./styles";
import { Place } from "../../../api/placesAPI";
import SearchResultListItem from "../searchResultListItem/SearchResultListItem";
import useThemeAwareObject from "../../../hooks/useThemeAwareObject";

interface SearchResultsListProps {
    results: Place[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({
    results,
}: SearchResultsListProps) => {
    const styles = useThemeAwareObject(createStyles);

    const renderItem = useCallback(
        ({ item }: { item: Place }) => <SearchResultListItem item={item} />,
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
                keyExtractor={(result) => result.id}
                renderItem={renderItem}
            />
        </>
    );
};

export default SearchResultsList;