const fs = require('fs');
const CONSTANTS = require('./constants');

const replaceAll = (str = '', target, replaceStr) => str.replace(new RegExp(target, 'gi'), replaceStr);
const readFileAndReplace = (path, target, replaceStr) => replaceAll(fs.readFileSync(path, {encoding: 'utf8'}), target, replaceStr);
const writeFile = (path, src) => fs.writeFileSync(path, src);

const getStoriesOutputFileName = name => CONSTANTS.STORIES_OUTPUT_FILE.replace(CONSTANTS.OUTPUT_FILE_NAME_STR, name);
const getTestOutputFileName = name => CONSTANTS.TEST_OUTPUT_FILE.replace(CONSTANTS.OUTPUT_FILE_NAME_STR, name);

module.exports = {
  replaceAll,
  readFileAndReplace,
  writeFile,
  getStoriesOutputFileName,
  getTestOutputFileName,
};