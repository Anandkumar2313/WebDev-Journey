// Definition : An array in javaScript is a data structure that stores an ordered list of elements.
// It can hold elements of any data type, including numbers, string, objects, and even other arrays.
// Arrays are a type of object in javaScript and have a number of built-in methods for adding, 
// removing, and manipulating elements.
// Arrays in javaScript are heterogenous in Nature.

// Declaration and Initialization
let a = [1,2,3,4, "Anand", false]
console.log(a);

let b = new Array(5);
console.log(b);

let c = new Array("abc", "def", "ghi")
console.log(c);

/**
 * Given Array - [11,12,13,14,15]
 * indexes/pos - [0, 1, 2, 3, 4]    // last element index = (arr.length - 1)
 */

console.log(a[4]);
a[4] = 5;   // Updating element of array at index 4
console.log(a);

