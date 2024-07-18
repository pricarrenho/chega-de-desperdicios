import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://sa-east-1.cdn.hygraph.com/content/clyngnxtn00xr07w1ldf8wxtp/master",
  documents: "src/service/**/queries.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
