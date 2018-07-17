const {isFunction, isArray, isObject, createInvalidTypeError} = require('./utils');

class VOMapper {
  static mapping(classType, data, transformFunction) {
    if (!isFunction(classType)) throw createInvalidTypeError('classType');
    if (!isArray(data) && !isObject(data)) throw createInvalidTypeError('data');
    if (!isFunction(transformFunction)) throw createInvalidTypeError('transformFunction');

    const createVO = (v) => new classType(transformFunction(v));

    return isArray(data)
      ? data.map(v => createVO(v))
      : [createVO(data)];
  }
}

module.exports = VOMapper;