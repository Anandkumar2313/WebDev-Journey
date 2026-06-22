// What are Classes and Objects

class Product {     // If no constructor is defined, JavaScript provides a default constructor.
    // Properties -> variable -> data members
    // name;
    // price;
    // rating;

    // Best Practice:
    // Do not explicitly return anything from a constructor.
    // JavaScript automatically returns the newly created object.

    // Creating (user defined) constructor method, 
    // If a constructor is explicitly defined, JavaScript does not generate the default constructor.
    // A class can have only one user defined constructor in javaScript

    constructor (n, p, r){       // Initializes the object, Constructor is called automatically when using new
        console.log("Calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10;      // If you return a primitive value, it is ignored.
        // return {x:10, y:20} // If you return an object, it replaces the newly created instance.
    }
    
    // behaviour -> functions -> member functions
    display(){
        console.log("Displaying the current product ",this.name,this.price, this.rating);
    }
}


const obj1 = new Product("Iphone", 120000, 5);     // new -> creates an empty plain object of class(product)
// product() -> We are calling the constructor method
console.log(obj1);
obj1.display();    // calling display function for obj1
console.log(obj1.name);


const obj2 = new Product("Macbook", 220000, 4.7);
console.log(obj2);
obj2.display();
