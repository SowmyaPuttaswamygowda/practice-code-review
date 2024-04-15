import {intersection} from './solution.js';

describe('intersection function', () => {
    test('should return an empty array if either array is empty', () => {
      expect(intersection([], [1, 2, 3])).toEqual([]);
      expect(intersection([1, 2, 3], [])).toEqual([]);
      expect(intersection([], [])).toEqual([]);
    });
  
    test('should return an empty array if no common elements are found', () => {
      expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });
  
    test('should return the intersection of two arrays', () => {
      expect(intersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])).toEqual([4, 5]);
      expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
    });
  
    test('should handle arrays with duplicate elements', () => {
      expect(intersection([1, 2, 2, 3], [2, 2, 3, 4])).toEqual([2, 2,3]);
    });
  });

    