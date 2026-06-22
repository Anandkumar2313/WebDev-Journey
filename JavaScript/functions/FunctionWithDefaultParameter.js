// Example : 1
function displayMsg(MsgToBeDisplayed = "I Learn DSA With Skill India"){
    console.log(MsgToBeDisplayed);
}

displayMsg("I am Anand Kumar"); // Here this parameter will over-write default Value
displayMsg();   // Here default value will be output
console.log("--------------------------------------");

// Example : 2

function sum(x,y=10){
    return x + y;
}
let a = 10, b = 45;
console.log(sum(a,b));
console.log(sum(a));    // here default value is added with a

