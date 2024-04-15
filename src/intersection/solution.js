/** .........
 * intersection of two numbers.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered values.
 */

export const intersection = (array1 = [], array2 = []) => {
    console.log('Array 1:', array1);
    console.log('Array 2:', array2);
    
    const result = array1.filter(element => array2.includes(element));
    console.log('Result:', result);
    
    return result;
};

