// Iss function ko phir dusre jgh call nhi kr skte hai
// Immediatly Invoke Function is also known as Self invoking Function
// Self Invoking Function : Aise function jo khud se execute ho jayenge, hme kahin pe call site prepare kr ke trigerkrne ka jrurat nhi pde

// Example 1:
(function exprr(){      // Using parenthesis to make Immediatly Invoke function
    console.log("Anand");
})();   // Function call using ()

// Example 2:
(function sqr(x){
    console.log(x*x);
    
})(5);