const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const name = 123;
        expect(isRealString(name)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        const name = '    ';
        expect(isRealString(name)).toBe(false);
    });

    it('should allow sgtring with non space charcters', () => {
        const res = isRealString('aaaa bbb');
        expect(res).toBe(true);
    });
});