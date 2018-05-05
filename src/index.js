#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const TemplateGenerator = require('./TemplateGenerator');
const TemplateVO = require('./TemplateVO');
const VOMapper = require('./VOMapper');
const CONSTANST = require('./constants');
const {loadMetaData, successLog, errorLog} = require('./utils');
const TEMPLATE_PATH = loadMetaData('./data/templatePath.json');

program
  .arguments('<name>')
  .action((name) => {
    VOMapper.mapping(TemplateVO, TEMPLATE_PATH, (v) => ({
      templatePath: path.join(__dirname, v.templatePath),
      templateOutputPath: v.templateOutputPath.replace(CONSTANST.OUTPUT_FILE_NAME_STR, name),
      newSubStr: name,
    })).forEach(v => TemplateGenerator.generate(v));

    successLog('Success! Let\'s coding the component 😎');
  })
  .version('0.1.0')
  .parse(process.argv);

const name = program.args[0];
if (!name) errorLog('name is required!');
