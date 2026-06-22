// In JavaScript, arrays, objects, and many complex data types have typeof "object".
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

console.log(typeof arr1);   // return object
console.log(arr2);  // returns the array elements

const arr3 = [arr1, arr2];  // It make 2D array and store it in arr3
console.log(arr3);  // returns 2D array

const arr4 = arr1.concat(arr2); // It concat arr1 with  arr2 and store it in arr4
console.log(arr4);  // return 1D array

// Rest operator (...) collects multiple elements into a single array.
// Spread operator (...) spreads iterable values into individual elements.
// spread also works on:strings, arrays, objects, function-arguments

const arr5 = [...arr1, ...arr2] // same as concatination of 2 array
console.log(arr5);  // return 1D array

// Samajhne ke liye :  ...arr1 = 1,2,3,4    It is not array \   since both are present inside array.
// Samajhne ke liye :  ...arr2 = 5,6,7,8    It is not array /   so arr5 stores concatinated array

// Older version
// arguments stores all values passed to a normal function.
function testOne(){
    console.log(arguments); // arguments is a array-like object having index and length property but not array method
}

testOne(1,2,3,4);
testOne([1,2,3,4])
console.log("---------------------------------------------");

// To get array as output from argumnets or arga

// Modern Version : Method 1, using REST operator
// args is a real array easier to use and modern approach supports array methods and arrow function

function demo(...args){
    console.log(args);
}
demo(1,2,3,4)
console.log("---------------------------------------------");

// Method 2:
// Array.from() : used to convert array-like or iterable objects into a real array
function testTwo(){
    const arr6 = Array.from(arguments)
    console.log(arr6);
    
}
testTwo(1,2,3,4)
console.log("---------------------------------------------");

// Method 3:
function test3 (){
    const arr7 = Array.from(arguments)
    const resultArray = arr7.map((e) =>{
        return e
    })
    console.log(resultArray);
}
test3(1,2,3,4)
test3(1,2,3,4,3,2,1)
console.log("---------------------------------------------");

// Return twice of element which are passed in arguments
function temp4 (){
    const arr8 = Array.from(arguments)
    const resultArray2 = arr8.map((e) =>{
        return e*2;
    })
    console.log(resultArray2);
}

temp4(1,1,2,3,4)

// Summary : 
// Rest operator collects multiple values into a single array.
// Spread operator expands iterable values into individual elements.

// if (...) used in function parameter then behaves like REST operator
// if (...) used in Array/Object/Function-Call then behaves like SPREAD operator

console.log("---------------------------------------------");

const names = ["superman", "flash"]
const newNames = ["Batman", ...names, "thor"]   // ... used as SPREAD operator
console.log(newNames);

const siteName = "SkillIndia"
console.log([...siteName]); // ... used as SPREAD operator, it gives output as array because we explicitly made it array
console.log("---------------------------------------------");

function skillIndia(...values){     // used as REST operator
    return values
}
console.log(skillIndia("Anand", "Genius")); // output array because ...args always return array
