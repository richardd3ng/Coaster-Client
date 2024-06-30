import { UserInfoFragment } from "../gql/graphql";

/**
 * Filter users by displayName or username
 * @param users The users to filter
 * @param query The query to filter by
 * @returns The filtered users
 */
export const filterUsers = (
    users: UserInfoFragment[],
    query: string
): UserInfoFragment[] => {
    const trimmedQuery = query.trim().toLowerCase();

    const score = (str: string, query: string) => {
        if (str.startsWith(query)) return 4; // Highest priority to start of displayName
        if (str.includes(query)) return 2; // Secondary priority to include anywhere in displayName
        return 0; // No match
    };

    return users
        .filter((user) => {
            const displayName = user.displayName.toLowerCase();
            const username = user.username.toLowerCase();
            return (
                displayName.includes(trimmedQuery) ||
                username.includes(trimmedQuery)
            );
        })
        .sort((a, b) => {
            const displayNameA = a.displayName.toLowerCase();
            const usernameA = a.username.toLowerCase();
            const displayNameB = b.displayName.toLowerCase();
            const usernameB = b.username.toLowerCase();

            const scoreA = Math.max(
                score(displayNameA, trimmedQuery) +
                    (usernameA.startsWith(trimmedQuery)
                        ? 3
                        : usernameA.includes(trimmedQuery)
                        ? 1
                        : 0),
                score(usernameA, trimmedQuery)
            );

            const scoreB = Math.max(
                score(displayNameB, trimmedQuery) +
                    (usernameB.startsWith(trimmedQuery)
                        ? 3
                        : usernameB.includes(trimmedQuery)
                        ? 1
                        : 0),
                score(usernameB, trimmedQuery)
            );

            return scoreB - scoreA;
        });
};
