#!/usr/bin/node

const {validate} = require("jsonschema");
const {readFileSync} = require("fs");
const {join: joinPath} = require("path");

function readJSONFile(path) {
    path = joinPath(__dirname, path)
    return JSON.parse(readFileSync(path));
}

const registry = readJSONFile("index.json");
const schema = readJSONFile("index.schema.json");

const {valid, errors} = validate(registry, schema);
if (valid) {
    console.log("OK");
    process.exit(0);
} else {
    console.error(errors);
    process.exit(2);
}