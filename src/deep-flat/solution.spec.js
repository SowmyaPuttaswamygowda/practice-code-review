import { solutionName } from './solution.js';

describe('add two numbers', () => {
    it('3+4 ->7', () => {
        expect(solutionName(3,4)).toEqual(7);
    });

    it('5 + 5 -> 10', () => {
        expect(solutionName(5,5)).toEqual(10);
    });

    it('10 + 0 ->10', () => {
        expect(solutionName(10,0)).toEqual(10);
    });

    it('-10 + 5 -> -5', () => {
        expect(solutionName(-10,5)).toEqual(-5);
    });
});
