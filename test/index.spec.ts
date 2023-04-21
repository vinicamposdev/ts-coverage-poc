import { myPackage } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = myPackage(message);

      expect(result).toMatch(message);
    });

    it('should return a string with empty space when dont provide a message', () => {
      const result = myPackage();

      expect(result).toMatch(' from my package');
    });
  });
});
