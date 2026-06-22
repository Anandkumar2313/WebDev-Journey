let emp = {
    id: 101,
    name: "Anand",
    age: 23
};
console.log("Object emp is : ",emp);
console.log("------------------------------------------------");

// Object emp is copying in Object obj
let obj = Object.assign({}, emp);   // Here {} represents without adding any key and value
console.log("Object obj is : ",obj);
console.log("------------------------------------------------");

// Object emp is copying in Object obj1 with extra key and value
let obj1 = Object.assign({address: "Hzb"}, emp);
console.log("Object obj1 is : ",obj1);