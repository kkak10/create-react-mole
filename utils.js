const fs = require('fs');
const _ = require('lodash');
const shortid = require('shortid');
const CONSTANTS = require('./constants');

const replaceAll = (str = '', target, replaceStr) => str.replace(new RegExp(target, 'gi'), replaceStr);
const readFileAndReplace = (path, target, replaceStr) => replaceAll(fs.readFileSync(path, {encoding: 'utf8'}), target, replaceStr);
const writeFile = (path, src) => fs.writeFileSync(path, src);

const getStoriesOutputFileName = name => CONSTANTS.STORIES_OUTPUT_FILE.replace(CONSTANTS.OUTPUT_FILE_NAME_STR, name);
const getTestOutputFileName = name => CONSTANTS.TEST_OUTPUT_FILE.replace(CONSTANTS.OUTPUT_FILE_NAME_STR, name);

const isString = (v) => _.isString(v);
const isFunction = (v) => _.isFunction(v);
const isArray = (v) => _.isArray(v);
const isObject = (v) => _.isObject(v);
const is = (instnace, typeClass) => instnace instanceof typeClass;
const createError = (msg) => new Error(msg);
const createInvalidTypeError = (valName) => createError(`${valName} is invalid type`);
const generateKey = () => shortid.generate();
const deepFreeze = (o) => {
  Object.freeze(o);

  for (let propKey in o) {
    let prop = o[propKey];
    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
      continue;
    }

    deepFreeze(prop);
  }
};
const loadMetaData = (path) => {
  const metaData = require(path);
  deepFreeze(metaData);

  return metaData;
};

module.exports = {
  replaceAll,
  readFileAndReplace,
  writeFile,
  getStoriesOutputFileName,
  getTestOutputFileName,
  isString,
  isFunction,
  isArray,
  isObject,
  is,
  createInvalidTypeError,
  generateKey,
  createError,
  deepFreeze,
  loadMetaData,
};