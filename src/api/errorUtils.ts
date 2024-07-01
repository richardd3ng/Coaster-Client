/**
 * Formats an error into a JSON string for logging
 * @param error The error to format
 * @returns The formatted error
 */
export const formatError = (error: unknown): string => {
    return JSON.stringify(error, null, 2);
};
