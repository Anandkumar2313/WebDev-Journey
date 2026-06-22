// Higher Order Function (HOF) and Callback Function

// HOF: A function that takes one or more functions as arguments or returns a function as its result.
// Callback Function: A function that is passed as an argument to another function (usually a HOF).

// JavaScript is Synchronous and single-thread Language
// Synchronous Piece of code : (Feature of JavaScript) Code execution line by line
function h (x,fn){
    // h -> HOF
    // fn -> CallBack function
    console.log(x*x);
    fn(x*x);
}

function square(n){
    console.log("Square value is : ",n);
    
}

h(10, square);

console.log("Start");
// Asynchronous behavior is provided by the JavaScript runtime
// (Browser APIs or Node.js APIs), not by the JavaScript language itself.
setTimeout(function f(){
    console.log("Timer Done 1.");
    
},1000)
setTimeout(function f(){
    console.log("Timer done 2.");   // 0ms does NOT mean immediate execution.The callback is queued and runs only after the current call stack becomes empty.
},0);
console.log("End");
for(let i=0; i < 1000000000; i++){} // JavaScript is single-threaded.The event loop cannot execute callbacks until this loop finishes.
