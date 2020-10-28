#!/bin/node
const fs = require("fs");
//Obtain the environment string passed to the node script
const environment = process.argv[2]
//read the content of the json file
const envFileContent = require(`../envs/${environment}.json`);
//copy the json inside the env.json file

// create the directory
const dir = './src/env';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

let contents = "";
let body = "";
let footer = "";
let exporting = "";

// compose the file from json to ts
for (let [key, value] of Object.entries(envFileContent)) {
    body += `const ${key} = \"${value}\"; \n`;
    exporting += `\n\t${key},`
};

footer = `export {${exporting}\n}`;
contents = `${body} \n${footer}`;


fs.writeFileSync(`${dir}/index.ts`, contents)