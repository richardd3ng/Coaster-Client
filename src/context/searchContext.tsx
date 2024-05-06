import { createContext } from "react";

import { DateFilter, MapRegion, SocialFilter } from "../types/custom";
import { DEFAULT_DATE_FILTER, DEFAULT_SOCIAL_FILTER } from "../utils/defaults";

interface SearchContextType {
    dateFilter: DateFilter;
    socialFilter: SocialFilter;
    region: MapRegion;
    setRegion: (region: MapRegion) => void;
}

const SearchContext = createContext<SearchContextType>({
    dateFilter: DEFAULT_DATE_FILTER,
    socialFilter: DEFAULT_SOCIAL_FILTER,
    region: null,
    setRegion: (_region: MapRegion) => {},
});

export default SearchContext;
