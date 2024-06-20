import { User } from "../types/entities";

export const filterUsers = (users: User[], query: string): User[] => {
    const trimmedQuery = query.trim().toLowerCase();

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

            const score = (str: string) => {
                if (str.startsWith(trimmedQuery)) return 2; // Priority to start of the string
                if (str.includes(trimmedQuery)) return 1; // Secondary priority to include anywhere
                return 0; // No match
            };

            const scoreA = Math.max(score(displayNameA), score(usernameA));
            const scoreB = Math.max(score(displayNameB), score(usernameB));

            return scoreB - scoreA;
        });
};
