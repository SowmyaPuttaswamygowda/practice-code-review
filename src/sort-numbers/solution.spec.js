import {sortNumbers} from './solution.js';

describe('sortNumbers function', () =>{
    it('sortNumbers([1.5, 1, -1.5, 0, -1])->[-1.5, -1, 0, 1, 1.5] ',() => {
    expect(sortNumbers[1.5, 1, -1.5, 0, -1]).toEqual(sortNumbers [-1.5, -1, 0, 1, 1.5]);
    });

    it('[10, -5, 3, 0, 8]->[-5, 0, 3, 8, 10]',() => {
        expect(sortNumbers[10, -5, 3, 0, 8]).toEqual(sortNumbers[-5, 0, 3, 8, 10]);
    });
1.25, 
    it('[1.25, 1.5, 1.75, 2, 2.25]->[1.5, 1.75, 2, 2.25]', () =>{
       expect(sortNumbers[1.25, 1.5, 1.75, 2, 2.25]).toEqual(sortNumbers[1.5, 1.75, 2, 2.25]);
    });
});
