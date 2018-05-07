const {
  replaceAll, isString, isFunction, isArray, isObject, is,
  createError, createInvalidTypeError, generateKey, deepFreeze,
} = require('../utils');

describe('Utils Test', () => {
  it('replaceAll', () => {
    expect(replaceAll('AABBAAC', 'BB', 'GG'))
      .toEqual('AAGGAAC');
  });

  it('isString', () => {
    expect(isString('Create-React-Mole')).toBeTruthy();

    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString({})).toBeFalsy();
    expect(isString(1)).toBeFalsy();
    expect(isString(isString)).toBeFalsy();
  });

  it('isFunction', () => {
    expect(isFunction(isFunction)).toBeTruthy();

    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction('Create-React-Mole')).toBeFalsy();
  });

  it('isArray', () => {
    expect(isArray([])).toBeTruthy();

    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray('Create-React-Mole')).toBeFalsy();
    expect(isArray(isArray)).toBeFalsy();
  });

  it('isObject', () => {
    expect(isObject({})).toBeTruthy();

    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject('Create-React-Mole')).toBeFalsy();
    expect(isObject(isArray)).toBeFalsy();
  });

  it('is', () => {
    const error = new Error();
    expect(is(error, Error)).toBeTruthy();
  });

  it('createError', () => {
    const message = 'Error Message :)';
    const error = createError(message);

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toEqual(message);
  });

  it('createInvalidTypeError', () => {
    const valName = 'title';
    const error = createInvalidTypeError(valName);

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toContain(valName);
  });

  it('generateKey', () => {
    for (let i = 0; i <= 100; i++) {
      expect(generateKey()).not.toEqual(generateKey());
    }
  });

  it('deepFreeze', () => {
    const obj = {
      user: {
        name: {
          first: 'Lee',
          last: 'Hanur',
        },
      },
    };

    deepFreeze(obj);
    obj.user = 1;
    expect(obj.user).not.toEqual(1);
    expect(obj.user).not.toEqual(1);

    obj.user.name.first = 123;
    expect(obj.user.name.first).not.toEqual(123);
  });
});