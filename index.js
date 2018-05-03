#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const TemplateGenerator = require('./TemplateGenerator');
const TemplateVO = require('./TemplateVO');
const VOMapper = require('./VOMapper');
const CONSTANST = require('./constants');
const {loadMetaData} = require('./utils');
const TEMPLATE_PATH = loadMetaData('./templatePath.json');

program
  .version('0.1.0')
  .option('-n, --name <name>', 'Add Component Name')
  .parse(process.argv);

const name = program.name;

if (!name) {
  console.error('name is required param.');
  return;
}

VOMapper.mapping(TemplateVO, TEMPLATE_PATH, (v) => ({
  templatePath: path.join(__dirname, v.templatePath),
  templateOutputPath: v.templateOutputPath.replace(CONSTANST.OUTPUT_FILE_NAME_STR, name),
  newSubStr: name,
})).forEach(v => TemplateGenerator.generate(v));

console.log("Success! Let's code the component 😎");