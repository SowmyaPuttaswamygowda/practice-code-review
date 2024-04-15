import { solutionName } from './solution.js';

describe(' difference between two numbers', () => {
    it(' 3 - 2 -> 1', () => {
        expect(solutionName(3, 2)).toEqual(1);
    });

    it('10 - 5 -> 5', () => {
        expect(solutionName(10,5)).toEqual(5);

    });

    it('5 - 10 -> -5',() => {
        expect(solutionName(-5, -10)).toEqual(5);
    });

    it('large numbers:10000 -5000 ->5000', () => {
        expect(solutionName(10000, 5000)).toEqual(5000);
    });
});
