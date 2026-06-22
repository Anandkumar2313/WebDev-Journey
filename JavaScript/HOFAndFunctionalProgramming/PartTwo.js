let arr = ["alex","bob","cyan"];
// forEach doesn't return any value
// Using forEach with function: 
arr.forEach(function(element, index, arr){
    console.log(element, index, arr);
    
})

console.log("----------------------------------------");

//  Using forEach with arrow-function :
arr.forEach((ele, idx,arr) => {
    console.log(ele,idx, arr);
})

console.log("----------------------------------------");
// map returns an array
// map is used to transform arrays while forEach is used to traverse arrays
// Using map with function: 

const heros = ["Anand", "Shashwat", "Roshan", "Rajesh", "Saini", "Raj", "Manish"]
heros.map(function(ele){
    console.log(ele.charAt(2));
    console.log(ele.toUpperCase());
})

console.log("----------------------------------------");
// Using map with arrow function : 
arr.map((h) => {
    console.log(h.toUpperCase());
})
console.log("----------------------------------------");

// forEach ignores returned values and itself returns undefined
let len = arr.forEach((ele) => {
    return ele.length;
})

console.log(len);

// map is used here to return array
let lengths = arr.map((ele) => {
    return ele.length;
})

console.log(lengths);

console.log("----------------------------------------");
// Using filter to extract subarray and many more : 
const filterFunc = heros.filter((h) => {    // filter check true/false values
    // return h.includes("an");     //returns heros element having substring "an"
    return h.endsWith("sh")         //returns heros element which ends wth "sh"
})
console.log(filterFunc);

console.log("----------------------------------------");


// Shopping Cart : 
const cartBill = [20,30,50]
const sumOfCartBill = cartBill.reduce((prev,currv) => prev+currv, 0)// Here it will add CartBill data,
// initial prev is 0, then
// prev = 0 and currv = 20 => sumOfCartBill = 0+20 = 20
// prev = 20 and currv = 30 => sumOfCartBill = 20+30 = 50
// prev = 50 and currv = 50 => sumOfCartBill = 50+50 = 100
console.log(sumOfCartBill);
console.log("----------------------------------------");

// Game Score
const gameScore = [200,300,310,250,150]
console.log("type of index1 is: ",typeof gameScore[1]); // it give output as "number" i.e string

// check if all values are number or not ?
const checkGameScore = gameScore.every((arr) => {
    return typeof arr === "number"
})
console.log("Check Result:",checkGameScore);

console.log("----------------------------------------");
// Check above 200
const above200 = gameScore.find((score) => {
    return score > 200      // It will give first number from L to R which is greater than 200
})
console.log(above200);
console.log("Before Sorting : ",gameScore);

// Sorting an Array
console.log("----------------------------------------");
const ascendingSortedArr = gameScore.sort((a,b) => {
    return a - b;
})

console.log("Asccending Sorted Array : ",ascendingSortedArr);
console.log("----------------------------------------");

const descendingSortedArr = gameScore.sort((a,b) => {
    return b - a;
})

console.log("descending Sorted Array : ",descendingSortedArr);
console.log("----------------------------------------");

// findIndex
const arr1 = [12, 32, 12, 9, 7, 8926.43]
const findIdx = arr1.findIndex((score) => {     // findIndex return 1st index which satisfies condition on moving L to R
    return score < 200;
});
console.log("Original Array : ",arr1);
console.log(findIdx);
console.log("----------------------------------------");

// some : It return Boolean value i.e true/false if condn met then true else false
let arr2 = arr1.some((ele) => {
    return ele > 300;
})

console.log(arr2);
