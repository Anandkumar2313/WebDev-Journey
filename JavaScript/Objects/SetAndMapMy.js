// Set Data_Structure :

let set = new Set();
console.log("Printing Set : ",set);    // It prints the Set object with its size and elements
console.log("--------------------------------------------------");

// Append value at end of set
console.log(set.add(1));   // setName.add(value) => It appends value = 1 at end of "setName" Set and return updated set
console.log(set.add(2));   // setName.add(value) => It appends value = 2 at end of "setName" Set
console.log(set.add(3));
console.log(set.add(2));    // Here it doesn't work because duplicate values not allowed in Set
console.log("Printing Set : ",set);
console.log("--------------------------------------------------");



// Delete value
console.log(set.delete(2));    // setName.delete(value) => It delete value when present in set :"setName" and return true, if value not present then return false
console.log("Printing Set : ",set);
console.log("--------------------------------------------------");



// Size of Set
console.log(set.size);  // Returns size of Set : "setName"
console.log("--------------------------------------------------");



// Check existence of element
console.log(set.has(3));    // setName.has(value) checks value is present in Set: "setName" or not,
console.log(set.has(2));    // if value is present then return true else false
console.log("--------------------------------------------------");



// forEach() iterates through each Set element
set.forEach((ele) => {
    console.log(ele);
})
console.log("--------------------------------------------------");



// setName.entries() returns an iterator of [value, value] pairs
set.add(10)
console.log(set.entries());
console.log("--------------------------------------------------");

// Clear all values stored in Set
console.log(set.clear());   // Delete all element from Set: "setName" and return undefined
console.log("Printing Set : ",set);

