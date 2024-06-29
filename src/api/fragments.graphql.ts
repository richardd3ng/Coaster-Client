import { graphql } from "../gql";

export const UserInfo = graphql(`
    fragment UserInfo on User {
        _id
        username
        displayName
        profileUrl
    }
`);
