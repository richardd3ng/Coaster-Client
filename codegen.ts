import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3000/graphql",
    documents: [
        "src/**/*.{ts, tsx, graphql, gql}",
        "src/**/*.fragment.graphql", // Include files containing GraphQL fragments
    ],
    ignoreNoDocuments: true,
    generates: {
        "./src/gql/": {
            preset: "client",
        },
    },
};

export default config;
