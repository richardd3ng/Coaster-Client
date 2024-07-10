/**
 * Formats an error into a JSON string for logging
 * @param error The error to format
 * @returns The formatted error
 */
export const formatError = (error: unknown): string => {
    return JSON.stringify(error, null, 2);
};

interface GraphQLError {
    message: string;
    extensions: {
        code: string;
        [key: string]: any;
    };
}
export const parseErrorGraphQL = (error: any): GraphQLError | null => {
    const err = error.response?.errors?.[0];
    return err ? { message: err.message, extensions: err.extensions } : null;
};
