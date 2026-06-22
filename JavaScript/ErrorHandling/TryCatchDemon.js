// Before Error Handling
// console.log("Hello World!");
// console.log(a);


// After Error Handling
try {
    console.log("Hello World!");
    console.log(a);
    console.log("Ending Tryb Block");
    
} catch {
    console.log("Error Handled");
} finally {
    console.log("Finally");
}

console.log("End");
