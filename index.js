#!/usr/bin/env node
const program = require('commander');
const writeFileFormattedComponent = require('./writeFileFormattedComponent');
const writeFileFormattedStyles = require('./writeFileFormattedStyles');
const writeFileFormattedStories = require('./writeFileFormattedStories');
const writeFileFormattedTest = require('./writeFileFormattedTest');

program
  .version('0.1.0')
  .option('-n, --name <name>', 'Add Component Name')
  .parse(process.argv);

const name = program.name;

if (!name) {
  console.error('name is required param.');
  return ;
}

try {
  writeFileFormattedComponent(name);
  writeFileFormattedStyles(name);
  writeFileFormattedStories(name);
  writeFileFormattedTest(name);
  
  console.log('success 😎');
} catch (e) {
  console.error(e.message);
}