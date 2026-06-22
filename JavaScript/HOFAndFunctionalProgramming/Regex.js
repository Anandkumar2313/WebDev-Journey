// Regex:  It is used for Patterns

let pattern = "skill";

// To create Regular Expression (regex) :
// Method 1:
let regexOne = new RegExp(pattern)

let flag = 'gi'     // g means global and i means case-insensitive
// Method 2:
let regexTwo = new RegExp(pattern, flag)

// Method 3:
let regexThree = /Skill/gi  // Inside forword slice is regex and outside is flag

const strToCheck = "Skill India is growing at a rapid speed and recently they are working on many domains of skills to create skilld people for nation."

// To check whether the pattern is present in string or not
// Method 1: 
const result1 = regexThree.test(strToCheck); // return boolean value, if pattern is present then true else false
console.log(result1);
console.log("----------------------------------------");

// Method 2:
const result2 = strToCheck.match(regexTwo)
console.log(result2);

// Method 3:
const result3 = strToCheck.replace(regexTwo, "ski-ll")  // jhn bhi regexTwo wala pattern dikh rha hai whn "ski-ll" replace kregaa
console.log(result3);

// Real life example :
const webUrl1 = "https://google.com/Anand%20kumar"
const usableUrl1 = webUrl1.replace(/%20/, "-")
console.log("Usable url1 is : ",usableUrl1);
console.log("------------------------------------------------");
// Till here we are using fixed pattern matching.
// If %20 changes to %30 or %40, then replacement will not work properly.
// To overcome this problem, we use generalized regex patterns.

// Pattern-Matching: for single digit followed by 0
console.log("Pattern Matching for Single digit : ");
const webUrl2 = "https://google.com/Anand%20kumar"
const webUrl3 = "https://google.com/Roshan%30Raj"
const webUrl4 = "https://google.com/Shashwat%40kumar"
const usableUrl2 = webUrl2.replace(/%\d0/, "-")
const usableUrl3 = webUrl3.replace(/%\d0/, "-")
const usableUrl4 = webUrl4.replace(/%\d0/, "-")

console.log("Usable url2 is : ",usableUrl2);
console.log("Usable url3 is : ",usableUrl3);
console.log("Usable url4 is : ",usableUrl4);
console.log("------------------------------------------------");
console.log("Pattern Matching for Double digit : ");

// Pattern-Matching: for double digit
const webUrl5 = "https://google.com/Dheeraj%21kumar"
const webUrl6 = "https://google.com/Neeraj%32Raj"
const webUrl7 = "https://google.com/RajShree%46Raj"
// Not work properly

const usableUrl5 = webUrl5.replace(/%\d0/, "-")
const usableUrl6 = webUrl6.replace(/%\d0/, "-")
const usableUrl7 = webUrl7.replace(/%\d0/, "-")

console.log("Usable url5 is : ",usableUrl5);
console.log("Usable url6 is : ",usableUrl6);
console.log("Usable url7 is : ",usableUrl7);
console.log("------------------------------------------------");

// For properly working
const usableUrl8 = webUrl5.replace(/%\d\d/, "-")
const usableUrl9 = webUrl6.replace(/%\d\d/, "-")
const usableUrl10 = webUrl7.replace(/%\d\d/, "-")

console.log("Usable url8 is : ",usableUrl8);
console.log("Usable url9 is : ",usableUrl9);
console.log("Usable url10 is : ",usableUrl10);
console.log("------------------------------------------------");
// Here it is so tough to check how many numbers and will present so we use regex form
// Generalize way to tackle these problem

// for % followed by any number of digit 
const webUrl8 = "https://google.com/Sonu%2112kumar"
const webUrl9 = "https://google.com/Monu%32332Raj"
const webUrl10 = "https://google.com/Chotu%46456Raj"

const usableUrl11 = webUrl8.replace(/%\d+/, "-")
const usableUrl12 = webUrl9.replace(/%\d+/, "-")
const usableUrl13 = webUrl10.replace(/%\d+/, "-")

console.log("Usable url11 is : ",usableUrl11);
console.log("Usable url12 is : ",usableUrl12);
console.log("Usable url13 is : ",usableUrl13);