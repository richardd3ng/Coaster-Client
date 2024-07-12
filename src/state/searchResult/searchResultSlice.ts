import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResult } from "../../gql/graphql";

export type SearchResultState = {
    searchResult: SearchResult | null;
};

const initialState: SearchResultState = {
    searchResult: null,
};

const searchResultSlice = createSlice({
    name: "searchResult",
    initialState,
    reducers: {
        setSearchResult: (
            state,
            action: PayloadAction<SearchResult | null>
        ) => {
            state.searchResult = action.payload;
        },
    },
});

export const { setSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
