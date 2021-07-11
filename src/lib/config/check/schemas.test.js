const { ValidationError } = require('yup');

const schemas = require('./schemas');

describe('check/schemas.js', () => {
  describe('Tags', () => {
    it('Should be defined', () => expect(schemas.Tags).toBeDefined());
    it('Should be an object', () => expect(typeof schemas.Tags).toBe('object'));
    it('Should pass the validation', () => {
      const { key, value } = schemas.Tags.validateSync({
        key: 'user.email',
        value: 'test@email.com',
      });
      expect(key).toBe('user.email');
      expect(value).toBe('test@email.com');
    });
    it('Should throw an error', () => {
      expect(() => schemas.Tags.validateSync({})).toThrowError(ValidationError);
      expect(() => schemas.Tags.validateSync({ key: undefined })).toThrowError(
        ValidationError,
      );
      expect(() =>
        schemas.Tags.validateSync({ value: undefined }),
      ).toThrowError(ValidationError);
      expect(() => schemas.Tags.validateSync({ key: '' })).toThrowError(
        ValidationError,
      );
      expect(() => schemas.Tags.validateSync({ value: '' })).toThrowError(
        ValidationError,
      );
      expect(() =>
        schemas.Tags.validateSync({ key: 'user.email', value: '' }),
      ).toThrowError(ValidationError);
      expect(() =>
        schemas.Tags.validateSync({ value: 'user.email', key: '' }),
      ).toThrowError(ValidationError);
    });
  });
});
