function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function f(){
            console.log("Timer 1.");
            // resolve(10);
            reject("error");
        },3000);
    });
}

// async is a keyword which is used to declare a function that always returns Promise
async function consume(){
    try{
        console.log("Inside function");
        const response = await createPromise();
        const response1 = await createPromise();
        console.log("Response is : ",response);
    }catch(err){
        console.log("Handled",err);
    }finally{
        console.log("Always runs");
    }
}
console.log("Start");
consume();
console.log("End");
