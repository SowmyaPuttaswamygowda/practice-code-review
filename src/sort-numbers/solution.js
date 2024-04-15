/** .........
 * Sum of two numbers.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 *  @returns {number[]} a new array with the same numbers, but sorted
 * @returns {number} The short number.
 */

export const sortNumbers = (numbers) => {
    // Sort the numbers in ascending order
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    return sortedNumbers;
};
 
