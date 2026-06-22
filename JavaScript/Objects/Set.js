let set1 = new Set();
console.log("Size of set1 : ",set1.size);

let arr = [1,2,3,4,3,1]
let set2 = new Set(arr) // Set stores unique values only
console.log("Set2 Object is : ",set2);
console.log("----------------------------------------------------------");

// Problem: Remove duplicate elements from array

// Method 1 :
// Returns a Set object containing unique values
let set3 = new Set(arr)
console.log("Unique Set : ",set3);
console.log("----------------------------------------------------------");

// Method 2: Returning Array
// Here steps are :
// Step 1: new Set(arr) removes duplicate values
// Step 2: Spread operator (...) extracts Set values as individual elements
// Step 3: [] creates a new array using those values
let resArray2 = [...(new Set(arr))]
console.log("After removing all duplicate elements : ",resArray2);

set3.add(9)     // To append value
set3.clear()    // To removes all elements
console.log(set3.has(9));    // Return boolean value


// Problem : set difference
const setA = new Set([5,6,7,8])
const setB = new Set([5,9,7,18])
function setDifference (setA, setB){
    return new Set([...setA].filter((el => {
        return !setB.has(el)
    })))
}
console.log("Difference of setA and setB is : ",setDifference(setA, setB));


// Problem : Give output as intersection of 2 set

const setC = new Set([5,6,7,8])
const setD = new Set([5,9,7,18])

function intersection (setA, setB){
    return new Set([...setA].filter((el => {
        return setB.has(el)
    })))
}
console.log("Intersection of setA and setB is : ",intersection(setA, setB));
