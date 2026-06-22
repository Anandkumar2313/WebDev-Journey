var a = 10;
var b = 20;
function sum(){
    var c = a+b;
    return c;
}
console.log(sum());

/**
 * Whenever JavaScript starts executing a program,
 * a Global Execution Context (GEC) is created and
 * pushed onto the Call Stack.
 *
 * During code execution, whenever a function is invoked,
 * a new Function Execution Context (FEC) is created and
 * pushed onto the top of the Call Stack.
 *
 * After the function finishes execution and returns,
 * its Function Execution Context is popped from the
 * Call Stack.
 *
 * This process continues for all function calls.
 *
 * Once the entire program has finished executing,
 * the Global Execution Context is also popped from
 * the Call Stack, leaving the Call Stack empty.
 */