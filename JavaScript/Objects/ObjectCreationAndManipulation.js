let obj = {id: 101, name: "Anand", salary: 20000};
console.log(obj);
console.log("---------------------");

// Overwriting/Updating/Modifying data in object : obj
console.log("OverWritten object is : ");
obj.id = 201;
obj.name = "Roshan";
obj.salary = 21000;
obj.age = 27;
console.log(obj);
console.log("---------------------");

let emp = new Object(); // Creates New Object
emp.id = 102;
emp.name = "Shashawat";
emp.salary = 22000;
console.log(emp);

// Create Object using function
function Emp(i,n,s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

let e = new Emp(301, "Sankalp", 32000);
console.log(e);

// To get value of any specific key of an object
console.log(emp.id);
console.log(e.id);          // using dot(.) operator
console.log(emp["name"]);   // using obj_name["Key_Value"]

// To delete "key and respective value"

delete emp.id   // to delete id key of object emp
console.log(emp);



