// try: Contains code that may throw an error

// catch(err): Executes only if an error occurs in try.
// The error object is available through 'err'.

// finally: Optional block that always executes,
// whether an error occurs or not.

// Note : 
// If an error occurs inside try,
// execution immediately stops at the error line
// and control transfers to catch.


// Method 1:

try{
    let x = undefined;
    console.log(x[0]);
}catch{
    console.log("Error handling in catch");
}finally{       // finally is optional
    console.log("Finally always get executed");
}

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// Method 2:    
// catch has its argument, that is err of try is passed to catch block
try{
    let x = undefined;
    console.log(x[0]);
    console.log("Hello");
}catch(err){
    console.log("Error handling in catch");
    console.log(err);
    
}finally{       // finally is optional
    console.log("Finally always get executed");
}
