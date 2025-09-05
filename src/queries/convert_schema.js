const { buildClientSchema, printSchema } = require('graphql');
const fs = require('fs');

try {
    const introspectionJson = JSON.parse(fs.readFileSync('schema.json', 'utf8'));
    const schema = buildClientSchema(introspectionJson.data);
    fs.writeFileSync('schema.graphql', printSchema(schema));
    console.log('Successfully converted schema.json to schema.graphql');
} catch (error) {
    console.error('Error converting schema:', error);
}
