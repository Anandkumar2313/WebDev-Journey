let names = ["Anand", "Shashwat", "Adhwait", "Dheeraj", "Roshan", "Rajesh"];
console.log(names);
console.log(names[3]);

// Built-In Methods :

// 1. To get length of Array
let len = names.length;
console.log("Length of Array names is : ",len);

// 2. To Print value stored in last index
// last_index = arrayName.length - 1
let lastIndex = names[len-1];
console.log("Element present in last index is : ",lastIndex);

// 3. To find index of Element
let idx = names.indexOf("Adhwait")
console.log(`Adhwait is present in index ${idx} of Array`);

// 4. To update value at index using loop
console.log(names);     // Before updation
for(let i=0; i<len; i++){
    if(names[i] == "Dheeraj"){
        names[i] = "Dhiraj";
    }
}
console.log(names);     // After updation

// 5. Inserting element in Array
names.push("Harsh");    // it add element "Harsh" at rightmost/last of array
console.log(names);

