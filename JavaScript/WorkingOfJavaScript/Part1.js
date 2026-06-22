/**
 * Execution Context : 
 * Execution Context is the environment in which JavaScript code is evaluated and executed. 
 * It contains variables, functions, scope information, and the value of this. 
 * 
 * Every execution context is created in two phases:
 * 1. Memory Creation Phase (Hoisting): Memory is allocated for variables and functions.
 * 2. Code Execution Phase: Code executes line by line.
 * 
 * JavaScript manages execution contexts using the Call Stack.
 * 
 * One-line memory trick
 * Execution Context = Memory + Code + this + Scope.
 * 
 * | Location                | Value of `this`                        |
 * | ----------------------- | -------------------------------------- |
 * | Browser Global Scope    | `window`                               |
 * | Node.js Module Scope    | `{}` (module object)                   |
 * | Inside an Object Method | That object                            |
 * | Arrow Function          | Inherits `this` from surrounding scope |
 * 
 * Types of Execution Context: 
 * 1. Global Execution Context (GEC)
 * 2. Function Execution Context (FEC)
 * 
 * Conclusion : 
 * 1. JavaScript is a single threaded Programming Language
 * 2. Every piece of JavaScript code executes inside an Execution Context.
 * 3. A new Function Execution Context is created whenever a function is invoked.
 */