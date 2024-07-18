declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BASE_URL: string;
            SPOTIFY_REDIRECT_URI: string;
            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
        }
    }
}

export {};
