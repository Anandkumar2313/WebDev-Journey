// 1. One parameter, And a single return statement
const square = (x) => x*x;

// 2. Multiple parameter, And a single return statement
const sumOfNumber = (x,y) => x+y;

// Multipe statements in function expression
const sum = (x,y) => {
    console.log(`Adding ${x} and ${y} is : `);
    return x+y;
};

// 4. Returning an object
const sumAndDifference = (x,y) =>(
    {sum: x+y, difference: x-y}
);

console.log("Square of 4 is : ",square(4));
console.log("Sum of 3 and 4 is : ",sumOfNumber(3,4));
console.log(sum(120,130));
console.log("Sum and difference of 5 & 6 is: ",sumAndDifference(5,6));


