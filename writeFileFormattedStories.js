const CONSTANTS = require('./constants');
const utils = require('./utils');

const formattedStories = (replaceStr) => 
  utils.readFileAndReplace(CONSTANTS.STORIES_TEMPLATE_PATH, CONSTANTS.TEMPLATE_NAME_STR, replaceStr);

const writeFileFormattedStories = (name) => 
  utils.writeFile(utils.getStoriesOutputFileName(name), formattedStories(name));

module.exports = writeFileFormattedStories;