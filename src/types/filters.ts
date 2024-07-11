import { SearchFilter, SearchResultType } from "../gql/graphql";

export enum DateFilter {
    None,
    Week,
    Month,
    Year,
}

export enum SocialFilter {
    Me = "Me",
    Friends = "Friends",
    Global = "Global",
}

export type ClusterFilter =
    | { type: "social"; value: SocialFilter; searchFilter?: SearchFilter }
    | { type: "jamMem"; value: string };

// export function isValidSearchFilter(filter: any): filter is SearchFilter {
//     return (
//         filter &&
//         (filter.type === undefined ||
//             filter.type === "Song" ||
//             filter.type === "Artist") &&
//         typeof filter.value === "string"
//     );
// }
