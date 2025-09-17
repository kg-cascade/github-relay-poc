import fs from 'fs';
import { buildClientSchema, printSchema } from 'graphql';

const githubSchemaJson = JSON.parse(fs.readFileSync('github_schema.json', 'utf-8'));
const schema = buildClientSchema(githubSchemaJson);
fs.writeFileSync('./src/api/schema.graphql', printSchema(schema));
