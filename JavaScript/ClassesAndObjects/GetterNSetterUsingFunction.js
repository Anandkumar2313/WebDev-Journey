// Getter and Setter
// Getter is used to access private data.
// Setter is used to update private data.

class Product{

    #rating;
    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.#rating = r
    }

    getter(){
        console.log("New Rating is",this.#rating);
    }

    setter(r){
        if(r < 0) return;
        this.#rating = r;
    }
    display(){
        console.log("Details of Product is : ",this.name, this.price, this.#rating);
    }
}

const prod1 = new Product("Xiomi", 22000, 4.5)
console.log(prod1); // Private fields are not shown when printing the object
// Before updating private data member prod1 is : 
prod1.display();


// Updating Private data member
prod1.setter(3.2)
// Fetching Private data member
prod1.getter()

// After updating private data member
prod1.display()
