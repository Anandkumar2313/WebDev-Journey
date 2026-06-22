// Promise is a JavaScript object that represents the eventual
// completion (resolve) or failure (reject) of an asynchronous operation.

/**
 * Three states of a Promise are:
 * 1. Pending   : Initial state (neither fulfilled nor rejected).
 * 2. Fulfilled : When resolve() is called successfully.
 * 3. Rejected  : When reject() is called due to an error/failure.
 */

/**
 * A Promise can change its state only once.
 * It can either:
 * 1. Pending -> Fulfilled
 * 2. Pending -> Rejected
 *
 * After that, the state is locked and cannot be changed.
 */

/**
 * The first call to resolve() or reject() decides the Promise state.
 * All subsequent resolve/reject calls are ignored.
 */

// Standard syntax of creating Promise object :-
/**
 * 
 *  function createPromise(){
 *      return new Promise(function exec(resolve, reject){
 *          // your code(Asynchronous) goes here
 *      });
 *  }
 * 
 */

function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            resolve("done")
            console.log("Timer 1.");
        },500);
        setTimeout(function f(){
            reject("error")
            console.log("Timer 2.");
        },200);
    })
}

console.log("Start");
let x = createPromise();
console.log("Got new Promise");
// .then() registers a callback.
// It does not execute immediately.
// The callback runs when the Promise becomes fulfilled.

/**
 * The Promise settles according to whichever resolve() or reject() is called first.
 * .then(), .catch(), and .finally() callbacks execute only after the current timer callback finishes.
 * 
 * .then(), .catch(), and .finally() callbacks are placed in the Microtask Queue, 
 * That's why they run after the current callback finishes but before the next Macrotask is executed.
 */

/**
 * Microtask Queue has higher priority than the Macrotask Queue.
 * After the current Call Stack becomes empty:
 * 1. All Microtasks are executed first.
 * 2. Then the Event Loop picks one Macrotask.
 */

/**
 * Note : 
 * Promises (.then/.catch/.finally) use the Microtask Queue, 
 * while setTimeout/setInterval use the Macrotask Queue. 
 * The Event Loop always processes all Microtasks before taking the next Macrotask.
 */

x.then(function f(){    // .then itself return Promise
    console.log("Promise done.");
}).catch(function f(){      // .catch() executes when the Promise is rejected
    console.log("Catch is called because the Promise was rejected.");
}).finally(function f(){    // .finally() executes regardless of whether the Promise was fulfilled or rejected.
    console.log("Finally always executes.");
})
console.log("End");
