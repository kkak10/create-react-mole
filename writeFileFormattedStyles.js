const CONSTANTS = require('./constants');
const utils = require('./utils');

const formattedStyles = (replaceStr) => 
  utils.readFileAndReplace(CONSTANTS.STYLES_TEMPLATE_PATH, CONSTANTS.TEMPLATE_NAME_STR, replaceStr);

const writeFileFormattedStyles = (name) => 
  utils.writeFile(CONSTANTS.STYLES_OUTPUT_FILE, formattedStyles(name));

module.exports = writeFileFormattedStyles;