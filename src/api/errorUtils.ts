export const formatError = (error: unknown): string => {
    return JSON.stringify(error, null, 2);
};
