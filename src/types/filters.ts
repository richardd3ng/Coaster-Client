import { SearchFilter, SnapshotPrivacy } from "../gql/graphql";

export enum DateFilter {
    None,
    Week,
    Month,
    Year,
}

export type ClusterFilter =
    | { type: "social"; value: SnapshotPrivacy; searchFilter?: SearchFilter }
    | { type: "jamMem"; value: string };

export const getFilterKey = (filter: ClusterFilter): string => {
    if (filter.type === "social") {
        if ("searchFilter" in filter && filter.searchFilter) {
            return `social-${filter.value}-${filter.searchFilter.type}-${filter.searchFilter.value}`;
        }
        return `social-${filter.value}`;
    } else if (filter.type === "jamMem") {
        return `jamMem-${filter.value}`;
    }
    throw new Error("Invalid filter type");
};
