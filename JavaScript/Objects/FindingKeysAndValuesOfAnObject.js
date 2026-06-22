let emp = {
    id: 101,
    name: "Anand",
    age: 2
};


// Object.keys(obj_name) return keys of object as array
// Object.values(obj_name) return values of object as array
// Object.entries(obj_name) return entries of object as array
let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);  // It will return 2D Array
console.log(entries);
