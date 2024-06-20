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
    | { type: "social"; value: SocialFilter }
    | { type: "jamMem"; value: number };
