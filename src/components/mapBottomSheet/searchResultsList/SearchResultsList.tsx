import { useCallback } from "react";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { SearchResult } from "../../../gql/graphql";
import LocationSearchResultListItem from "../searchResultListItem/SearchResultListItem";

interface SearchResultsListProps {
    results: SearchResult[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({
    results,
}: SearchResultsListProps) => {
    const renderItem = useCallback(
        ({ item }: { item: SearchResult }) => (
            <LocationSearchResultListItem item={item} />
        ),
        []
    );

    return (
        <BottomSheetFlatList
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={renderItem}
        />
    );
};

export default SearchResultsList;
