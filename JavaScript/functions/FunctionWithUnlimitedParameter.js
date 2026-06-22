function sumOfAllParameter(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

let ans = sumOfAllParameter(1,2,3,4,5,6,7);
console.log("sum of all parameter is : ",ans);