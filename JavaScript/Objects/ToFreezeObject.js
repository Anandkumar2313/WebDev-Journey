let emp = {
    id: 101,
    name: "Anand",
    age: 20
};

// Existing values can be updated, New properties cannot be added, Existing properties cannot be deleted
console.log("Actual Employ Id is : ",emp.id);
Object.seal(emp);
emp.id = 201;
console.log("Updated Employ Id is : ",emp.id);
emp.address = "India";
console.log(emp);

console.log("------------------------------------------------");

// To freeze whole Object : 
Object.freeze(emp); // Used to freeze whole Object: emp means any type of updation is not allowed
emp.id = 301;       // Updating value of id key
console.log("Employ Id is : ",emp.id);    // Since whole Object: emp is freezed so we don't get updated result
emp.address = "India";
console.log(emp);


