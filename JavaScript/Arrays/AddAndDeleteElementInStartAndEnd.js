console.log("--To Add and delete element of/in Array--");

let arr = [1,2,3,4,5]
arr.push(6,7);  // Brackets ke andar jo likha hoga wo element array me last index se push hoga
console.log(arr);

console.log("-----------------------------");

arr.pop();  // array ka last index se delete hoga
console.log(arr);

console.log("-----------------------------");

let f = arr.shift();    // array ka 0th index se delete hoga
console.log(arr);
console.log(f);


console.log("-----------------------------");

arr.unshift("Anand");    // array ka start index me push hoga
console.log(arr);
