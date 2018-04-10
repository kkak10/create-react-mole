const CONSTANTS = require('./constants');
const utils = require('./utils');

const FILE_NAME = '';

const formattedComponent = (replaceStr) => 
  utils.readFileAndReplace(CONSTANTS.COMPONENT_TEMPLATE_PATH, CONSTANTS.TEMPLATE_NAME_STR, replaceStr);

const writeFileFormattedComponent = (replaceStr) => 
  utils.writeFile(CONSTANTS.COMPONENT_OUTPUT_FILE, formattedComponent(replaceStr));

module.exports = writeFileFormattedComponent;