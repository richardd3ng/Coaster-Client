import { graphql } from "../gql";

export const UserInfo = graphql(`
    fragment UserInfo on User {
        _id
        username
        displayName
        profileUrl
    }
`);

export const UserReduxState = graphql(`
    fragment UserReduxState on User {
        _id
        spotifyId
        username
        displayName
        profileUrl
        snapshotPrivacy
        snapshotRetention
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
        previewUrl
    }
`);

export const SnapshotInfo = graphql(`
    fragment SnapshotInfo on Snapshot {
        songId
        latitude
        longitude
    }
`);

export const JamMemMetadata = graphql(`
    fragment JamMemMetadata on Jam_Mem {
        _id
        ownerId
        name
        location
        start
        end
        coverUrl
    }
`);
