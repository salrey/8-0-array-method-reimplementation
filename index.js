/**
 * Appends an element to the end of an array. Do not use the push method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {Array[*]} element - an element of any kind.
 * @returns {number} the new length of the array.
 */

//NOTES
//In order to grab remaining arguments after array parameter
//Use the REST operator 
// function myPushFunction(array, ...elements) {
  // Then to access elements, loop 
  // for(const element of elements)
// OR const elements = Array.from(arguments).slice(1)
// Note that arguments will console.log out as object with a key for each parameter
// That's why we do Array.from(arguments)

function myPushFunction(array, ...elements) {
  for (const element of elements) {
    array[array.length] = element;
  }
  
  return array.length;
};

/**
 * Removes the last element of the array and returns the removed element, or undefined if the array is empty. Do not use the pop method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
 function myPopFunction(array) {
  if (array.length === 0) {
    return undefined;
  };
  const lastElement = array[array.length-1] 
  array.length--;
  return lastElement; 
};

// //Check
// const array = [1, 2, 3, 4]
// console.log(myPopFunction(array))

/**
 * Determines whether an array includes a specific value within its entries. Do not use the includes method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {boolean} returns true if the searchElement is found in the array and false if it is not.
 */
 function myIncludesFunction(array, searchElement, startIdx) {
  let result = false;

  startIdx = startIdx || 0

  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  } 
  
  for (let i = startIdx; i < array.length; i++) {
    if (searchElement === array[i]) {
      result = true;
    }; 
  };
  
  return result; 
};

/**
 * Returns the first index in an array where a specified value is found. Do not use the indexOf method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} searchElement - an element of any type that you are searching for in the array.
 * @param {number} [startIdx] - an optional index from which to start searching.
 * @returns {number} returns the index at which the searchElement is found, or -1 if it is not found.
 */
 function myIndexOfFunction(array, searchElement, startIdx) {
  let result = -1;

  startIdx = startIdx || 0

  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  } 
  
  for (let i = startIdx; i < array.length; i++) {
    if (searchElement === array[i]) {
      result = i;
    }; 
  };

  return result;
};

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Do not use the slice method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {number} [startIdx] - an optional number representing the starting index of the extraction. The startIdx can be negative.
 * @param {number} [endIdx] - an optional number representing the ending index of the extraction (non-inclusive). The endIdx can be negative.
 * @returns {Array[*]} returns a new array containing the extracted elements.
 */
 function mySliceFunction(array, startIdx, endIdx) {
  const extractedElements = [];

  startIdx = startIdx || 0
  if (startIdx < 0) {
    startIdx = array.length + startIdx
  }
  
  endIdx = endIdx || array.length
  if (endIdx < 0) {
    endIdx = array.length + endIdx
  } else if (endIdx > array.length) {
    endIdx = array.length
  }

  for (let i = startIdx; i < endIdx; i++) {
    extractedElements[extractedElements.length] = array[i];
  }

  return extractedElements;

};

// Check 
// const array = [1, 2, 3, 4, 5]
// let startIdx = 2
// let endIdx = -1
// console.log(mySliceFunction(array, startIdx, endIdx))


/**
 * Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. Do not use the join method.
 * @param {Array[*]} array - an array of any kind of elements
 * @param {string} [separator] - an optional string to separate each pair of adjacent elements of the array. If no separator is specific the default separator should be a comma (",")
 * @returns {string} returns the concatenated string.
 */
 function myJoinFunction(array, separator = ",") { 

  let newList = "";

  for (let i = 0; i < array.length; i++) {
    newList += array[i]; 
    if (array.length > 1 && i < array.length -1) {
      newList += separator;
    }; 
  };
  
  return newList;
};

/**
 * Reverses the elements in the given array, returning the array. The first array element becomes the last, and the last array element becomes the first. Mutates the original array. Do not use the reverse method.
 * @param {Array[*]} array - an array of any kind of elements
 * @returns {Array[*]} returns a new array with the elements reversed.
 */
// NOTES
//You can use .slice to create a copy of an array and then reverse
//const reversed = arr.slice().reversed()
// Also use temp method, where you're setting a variable for each element
// const temp = array[i]

function myReverseFunction(array) {
  const middle = array.length / 2;
  for (let i = 0; i < middle; i++) {
    let oppositeHalf = array[array.length - 1 -i];
    let firstHalf = array[i];
    array[i] = oppositeHalf;
    array[array.length - 1 -i] = firstHalf;
  };

  return array;

  // const newList = [];

  // for (let i = 0; i < array.length; i++) {
  //   newList[i] = array[i]; 
  // };
  // for (let i = array.length - 1; i >= 0; i--) {
  //   array[(array.length - 1) - i] = newList[i];
  // };

  // return array;
};

// Check
// const array = [1, 2, 3, 4, 5];
// console.log(myReverseFunction(array))


/**
 * Adds an element to the front of the array. Do not use the unshift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @param {*} newElement - an element of any type to add to the front of the array.
 * @returns {number} returns the new length of the array.
 */
 function myUnshiftFunction(array, newElement, newElement1, newElement2) {

  for (let i = array.length -1; i >= 0; i--) {
      array[i + arguments.length -1] = array[i];
    };
  for (let i = 1; i < arguments.length; i++) {
    array[i-1] = arguments[i];
  };
    
  return array.length;
};

/**
 * Removes the first element of the array and returns the removed element, or undefined if the array is empty. Do not use the shift method.
 * @param {Array[*]} array - an array of any kind of elements.
 * @returns {*} - the removed element
 */
function myShiftFunction(array) {
  let firstElement = array[0]

  if (array.length === 0) {
    return undefined
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i+1]
  }

  array.length--

  return firstElement
}

//check
// console.log(myShiftFunction([1,2,3,4]))

module.exports = {
  myPushFunction,
  myPopFunction,
  myIncludesFunction,
  myIndexOfFunction,
  mySliceFunction,
  myJoinFunction,
  myReverseFunction,
  myUnshiftFunction,
  myShiftFunction,
};
