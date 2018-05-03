const {is, createInvalidTypeError, readFileAndReplace, writeFile, createError} = require('./utils');
const CONSTANTS = require('./constants');
const TemplateVO = require('./TemplateVO');

class TemplateGenerator {
  static generate(templateVO) {
    if (!is(templateVO, TemplateVO)) throw createInvalidTypeError('templateVO');
    
    try {
      const template = readFileAndReplace(templateVO.templatePath, CONSTANTS.TEMPLATE_NAME_STR, templateVO.newSubStr);
      writeFile(templateVO.templateOutputPath, template);
    } catch (e) {
      throw createError('Template write is fail!');
    }
  }
}

module.exports = TemplateGenerator;