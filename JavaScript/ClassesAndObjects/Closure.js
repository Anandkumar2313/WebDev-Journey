// Scope of variable

let score = 4
function one(){
    let score = 0;
    console.log(score);
}

function two(){
    let score = 3;
    console.log(score);
}

function three(){
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function outerFunc(){
    let outerVar = "I am at scope level 1"
    function innerFunc(){
        let innerVar = "I am at scope level 2"
        console.log(outerVar);
    }
    console.log(innerVar);
    innerFunc()
}
// outerFunc()

const myGlobalValue = 0;
function func(){
    const val1 = 1;
    console.log(myGlobalValue);
    function innerOfFunc(){
        const val2 = 2;
        console.log(val2, val1, myGlobalValue);
        
        function innerOfInnerFunc(){
            const val3 = 3;
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerOfInnerFunc();
    }
    innerOfFunc();
}
// func()

// Closure : remembering outer variable with value

function superFun(){
    let outerValue = "I am outer";
    function minorFun(){
        console.log(outerValue);
    }
    minorFun()
}
// superFun()

// Real life Example
const errorMsg = "File Not Found";
setTimeout(function callback(){
    console.log(errorMsg);
    
},1000) // After 1000ms that is 1sec function callback is called only once, not repeteadly

let pageCount = 0;
const items = [2,,4,5,7,8]
items.forEach(function iterator(num){
    pageCount++;
    console.log(num);
})

console.log("Page Count : ",pageCount);
