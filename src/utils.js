const fs = require('fs');
const _ = require('lodash');
const shortid = require('shortid');
const chalk = require('chalk');

const replaceAll = (str = '', target, replaceStr) => str.replace(new RegExp(target, 'gi'), replaceStr);
const readFileAndReplace = (path, target, replaceStr) => replaceAll(fs.readFileSync(path, {encoding: 'utf8'}), target, replaceStr);
const writeFile = (path, src) => fs.writeFileSync(path, src);

const isString = (v) => _.isString(v);
const isFunction = (v) => _.isFunction(v);
const isArray = (v) => _.isArray(v);
const isObject = (v) => _.isPlainObject(v);
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

const successLog = (msg) => console.log(chalk.blue(msg));
const errorLog = (msg) => console.log(chalk.red(msg));

module.exports = {
  replaceAll,
  readFileAndReplace,
  writeFile,
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
  successLog,
  errorLog,
};