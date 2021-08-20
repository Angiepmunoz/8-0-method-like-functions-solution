/**
 * Appends an element or multiple elements to the end of an array.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array.
 */

function myPushFunction(array) {
  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

/**
 * Removes the last element of the array and returns the removed element or undefined if the array is empty.
 * @param {Array[]} array - an array of with any kind of elements.
 * @returns {number} the new length of the array .
 */
function myPopFunction(array) {
  if (!array.length) {
    return undefined;
  } else {
    let removedEl = array[array.length - 1];
    array.length = array.length - 1;
    return removedEl;
  }
}

/**
 * Determine whether an array includes a specific value within its entries.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {boolean} returns true or false if the searchElement is found in the array.
 */
function myIncludesFunction(array, searchEl, startFromIdx = 0) {
  if (startFromIdx < 0) {
    startFromIdx = array.length + startFromIdx;
  }
  for (let i = startFromIdx; i < array.length; i++) {
    if (array[i] === searchEl) {
      return true;
    }
  }
  return false;
}

/**
 * Return the first index in an array where a specified value is found.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @returns {number} returns the index at with the searchElement is found or -1.
 */
function myIndexOfFunction(array, searchEl, startIdx = 0) {
  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  }
  for (let i = startIdx; i < array.length; i++) {
    if (array[i] === searchEl) {
      return i;
    }
  }
  return -1;
}

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
function mySliceFunction(array, startIdx, endIdx) {
  startIdx = startIdx || 0;
  endIdx = endIdx || array.length;

  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  }
  if (endIdx < 0) {
    endIdx = array.length + endIdx;
  }

  const slicedArr = [];
  for (let i = startIdx; i < endIdx; i++) {
    if (array[i] !== undefined) {
      slicedArr.push(array[i]);
    }
  }
  return slicedArr;
}

/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 * @param {Array[*]} array - an array of with any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns a new array containing the extracted elements
 */
function myJoinFunction(array, separator = ",") {
  let joinedString = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      joinedString += array[i] + separator;
    } else {
      joinedString += array[i];
    }
  }
  return joinedString;
}

/**
 * Returns an array with the elements reverse. The first array element becomes the last, and the last array element becomes the first.
 * @param {Array[*]} array - an array of with any kind of elements
 * @returns {Array[*]} returns a new array with the elements reversed.
 * 
 * FULL DISCLOSURE: this 'reverse method function' was modified for the purpose of this exercise. The actual method behaves differently. Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
function myReverseFunction(array) {
  let reversedArr = [];
  while (array.length) {
    reversedArr.push(array.pop());
  }
  return reversedArr;
}

/**
 * Returns an array with one or more elements added to the front of the array followed by the original elements.
 * @param {Array[*]} array - an array of with any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {Array[*]} returns a new array with the newElement added to the front of the array followed by the original elements.
 * 
 * FULL DISCLOSURE: this 'unshift method function' was modified for the purpose of this exercise. The actual method behaves differently. Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */
function myUnshiftFunction(array) {
  let unshiftArr = [...arguments].slice(1);
  for (let i = 0; i < array.length; i++) {
    unshiftArr.push(array[i])
  }
  return unshiftArr;
}



module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction
};
