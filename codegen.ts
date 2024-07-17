import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
    throw new Error("BASE_URL is not defined in the environment variables");
}

const config: CodegenConfig = {
    schema: `${BASE_URL}/graphql`,
    documents: ["src/**/*.{ts,tsx}", "src/api/fragments.graphql.ts"],
    ignoreNoDocuments: true,
    generates: {
        "./src/gql/": {
            preset: "client",
        },
    },
};

export default config;
