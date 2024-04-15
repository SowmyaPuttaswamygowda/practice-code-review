import {splitobj} from './solution.js';

describe('splitobj function', () => {
    test('should split object properties into an array of key-value pairs', () => {
        const inputObj = { a: 1, b: 2, c: 3 };
        const expectedResult = [{ a: 1 }, { b: 2 }, { c: 3 }];

        expect(splitobj(inputObj)).toEqual(expectedResult);
    });

    test('should handle object with string values', () => {
        const inputObj = { a: 'hello', b: 'world' };
        const expectedResult = [{ a: 'hello' }, { b: 'world' }];

        expect(splitobj(inputObj)).toEqual(expectedResult);
    });

    test('should handle object with boolean values', () => {
        const inputObj = { a: true, b: false };
        const expectedResult = [{ a: true }, { b: false }];

        expect(splitobj(inputObj)).toEqual(expectedResult);
    });

    test('should handle object with null values', () => {
        const inputObj = { a: null, b: null };
        const expectedResult = [{ a: null }, { b: null }];

        expect(splitobj(inputObj)).toEqual(expectedResult);
    });

    test('should handle object with undefined values', () => {
        const inputObj = { a: undefined, b: undefined };
        const expectedResult = [{ a: undefined }, { b: undefined }];

        expect(splitobj(inputObj)).toEqual(expectedResult);
    });
});