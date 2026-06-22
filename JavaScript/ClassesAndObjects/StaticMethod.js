class Product {
    // Making rating a private data member.
    // It cannot be accessed or modified directly outside the class.
    // We can make data member as private using #, 
    // but if we use private data member then we have to always use # with that member
    
    #rating
    constructor (n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    updateRating(newRating){
        this.#rating = newRating;
    }

    static custom(){
        console.log("Calling a static method");
    }

    display(){
        console.log("Calling display function : ", this.name,this.price, this.#rating);
    }
}

const prod1 = new Product("Hero", 200000, 4.7)
console.log("Object Prod1 is :",prod1);     // Here we will not get rating value as it is private data member
console.log("prod1.name is : ",prod1.name);
// Updating value stored in object prod1
prod1.name = "Honda";
console.log("Updated prod1.name is : ",prod1.name);

prod1.display();    // Here we will get rating value because we have written this.#rating in "display" function
// prod1.custom() => wrong approach because static method is for class only, we can't access it directly with object
Product.custom()

// Trying to update private data member
prod1.rating = 3.7   // This will add a new public data member "rating" and having value 3.7
console.log("Object prod1 is :",prod1);
console.log("Rating of prod1 is : ",prod1.rating);

console.log("Calling display function to see whether private data member stores updated value or not : ");
prod1.display()

console.log("-------------------------------------------------------------");
// Trying to update Private data member form class only by using function
prod1.updateRating(2.3);    // By this way we can update private data member
prod1.display();    // now we get updated rating
