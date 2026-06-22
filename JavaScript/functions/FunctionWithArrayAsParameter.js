function add([num1,num2]){
    return num1 + num2;
}

let numbers = [10,30,30];
let result = add(numbers);  // It will pass 0th and 1st index of array : numbers, because there are only 2 arguments in function : add
console.log(result);
