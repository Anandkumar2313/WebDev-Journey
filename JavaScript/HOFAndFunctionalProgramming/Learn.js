// A function that return a function or 
// takes other functions as arguments is called a higher order functions.
// Means treating a function as a variable

// Array function
const powerTwo = (n) => {
    return n ** 2;
};

// Higher Order Function
// Passing function as argumenet
function powerThree (powerTwo, n){
    return powerTwo(n) * n;
}

// let ans = powerThree(powerTwo, 6);
// console.log(ans);

// Higher Order Function
// returning function
function sayHello (){
    return () => {
        console.log("Hello Anand");
    }
}

let guessValue = sayHello();
console.log(guessValue);    //Give function as output 
guessValue()

console.log("----------------------------------------------------------");
// Example 2:
// Function creation
const highOrder = (n) => {
    const funOne = (m) => {
        const funTwo = (p) => {
            return m + n + p;
        }
        return funTwo;
    }
    return funOne;
}

// Function call
console.log(highOrder(2)(3)(4));

console.log("----------------------------------------------------------");

// Example 3 : 
const myNums = [1,2,3,4,5];

const sumArray = (arr) => {
    let total = 0;
    arr.forEach(function(element){
        total = total + element;
    });
    return total;
}

console.log("Total sum : ",sumArray(myNums));

// SetInterval And SetTimeOut
function msg(){
    console.log("Hello Anand", Math.random());
}

setInterval(msg, 1000);     // After every 1000ms i.e 1s function "msg" will call repeadly.

//setTimeout(msg, 2000); // After program execution it take 2000ms i.e 2s to execute this line, It runs only once.
