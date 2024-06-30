import { graphql } from "../gql";

export const UserInfo = graphql(`
    fragment UserInfo on User {
        _id
        username
        displayName
        profileUrl
    }
`);

export const SongInfo = graphql(`
    fragment SongInfo on Song {
        _id
        spotifyId
        uri
        name
        artists
        albumUrl
    }
`);

export const SnapshotInfo = graphql(`
    fragment SnapshotInfo on Snapshot {
        songId
        latitude
        longitude
    }
`);
