let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
// syntax: arr_name.splice(index_no, no_of_element_to_delete, element_to_push,element_to_push, ---,---)
arr.splice(2,0,11)
console.log(arr);
console.log("------------------------------------");
arr.splice(2,0,21,22)
console.log(arr);
console.log("------------------------------------");
arr.splice(3,1,15);
console.log(arr);
console.log("------------------------------------");
arr.splice(3,2,15);
console.log(arr);
console.log(arr.length);    // Give length of Array: arr

