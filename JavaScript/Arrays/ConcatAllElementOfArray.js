let arr = [1,2,3,4,5];
let brr = ['a', 'b', 'c', 'd'];

// After join we have to store joined element to get desired result

let str1 = arr.join("");
console.log(str1);

let crr = arr.concat(brr);
let str2 = crr.join("@");
let str3 = crr.join("_");
console.log(str2);
console.log(str3);
