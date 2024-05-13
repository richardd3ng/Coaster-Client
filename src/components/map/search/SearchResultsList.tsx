import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { PlaceData } from "../../../utils/locationUtils";
import SearchResultListItem from "./SearchResultListItem";
import { Divider } from "@ui-kitten/components";
import { Text, TouchableOpacity, View } from "react-native";

interface SearchResultsListProps {
    results: PlaceData[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = (
    props: SearchResultsListProps
) => {
    const renderItem = useCallback(
        ({ item }: { item: PlaceData }) => <SearchResultListItem item={item} />,
        []
    );

    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        paddingLeft: 16,
                        paddingVertical: 12,
                        color: "gray",
                    }}
                >
                    Locations
                </Text>
                <TouchableOpacity
                    style={{ paddingRight: 16 }}
                    onPress={() => console.log("show more locations")}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            paddingLeft: 16,
                            paddingVertical: 12,
                            color: "blue",
                        }}
                    >
                        More
                    </Text>
                </TouchableOpacity>
            </View>
            <Divider style={{ backgroundColor: "gray" }} />
            <BottomSheetFlatList
                data={props.results}
                keyExtractor={(result) => result.placeId}
                renderItem={renderItem}
            />
        </>
    );
};

export default SearchResultsList;
