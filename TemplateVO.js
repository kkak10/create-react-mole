const {generateKey, isString, createInvalidTypeError} = require('./utils');

const PrivateSymbol = Symbol(generateKey());

class TemplateVO {
  constructor({templatePath, templateOutputPath, newSubStr}) {
    if (!isString(templatePath)) throw createInvalidTypeError('templatePath');
    if (!isString(templateOutputPath)) throw createInvalidTypeError('templateOutputPath');
    if (!isString(newSubStr)) throw createInvalidTypeError('newSubStr');

    this[PrivateSymbol] = {
      templatePath,
      templateOutputPath,
      newSubStr,
    };
  }

  get templatePath() {
    return this[PrivateSymbol].templatePath;
  }

  get templateOutputPath() {
    return this[PrivateSymbol].templateOutputPath;
  }

  get newSubStr() {
    return this[PrivateSymbol].newSubStr;
  }
}

module.exports = TemplateVO;