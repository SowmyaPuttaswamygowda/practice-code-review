/** .........
 * Splits an object into multiple objects with one key/value pair each.
 * 
 *@param {Object} [toSparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @returns The new objects are returned in an array.
 *
 */

/*export const obj = {
    name: 'jamun',
    age:30,
    city: 'New york',
};*/
 
export const splitobj = (obj = {}) => {
    const arr = [];
    for (const key in obj) {
        arr.push({ [key]: obj[key] });
    }

    return arr;
};

           