let a = 10;
let b = 3;

console.log(a == b);    // return true or false
console.log(a >= b);    // return true or false
console.log(a <= b);    // return true or false
console.log(a != b);    // return true or false
console.log(a > b);    // return true or false
console.log(a < b);    // return true or false

console.log("-----------------------------------------------------------");

let c = 300;
let d = "300";
console.log(c == d);    // First value in variable 'd' try to convert itself into number dataType internally then comparision will done. Means Type checking is not done in "==" comparision operator
console.log(c === d);   // To overcome previour problem we use "===" comparision operator
console.log(c !== d);

console.log("-----------------------------------------------------------");
console.log("Comparision using Boolean (AND) and Boolean (OR) operator");

let value1 = true;
let value2 = false;
let value3 = true;
let value4 = false;


console.log(value1 && value2);
console.log(value1 && value3);
console.log(value1 || value2);
console.log(value1 || value3);

console.log("Real Life Example : ");

// Real Life Example 1 : 
let isLoggedIn = true;
let cardDetails = false;
console.log(isLoggedIn && cardDetails);

// Real Life Example 2 : 
let gmailAccount = true;
let emailAccount = true;
console.log(gmailAccount || emailAccount);

