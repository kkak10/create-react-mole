const CONSTANTS = require('./constants');
const utils = require('./utils');

const formattedTest = (replaceStr) => 
  utils.readFileAndReplace(CONSTANTS.TEST_TEMPLATE_PATH, CONSTANTS.TEMPLATE_NAME_STR, replaceStr);

const writeFileFormattedTest = (name) => 
  utils.writeFile(utils.getTestOutputFileName(name), formattedTest(name));

module.exports = writeFileFormattedTest;