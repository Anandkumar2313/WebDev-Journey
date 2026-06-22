// Getter is used to access private data.
// Setter is used to update private data.

// Public field: Accessible from inside and outside the class.
// Private field: Accessible only within the class.
// Getter: Provides controlled access to private data.
// Setter: Provides controlled modification of private data.

class Person{

    #age
    constructor(n,a,g){
        this.name = n;
        this.#age = a;
        this.gender = g;
    }

    // By using get and set keyword, they are not treated as function thet are treated as properties of class
    get ageGetter(){
        return this.#age;
    }

    set ageSetter(a){
        if(a < 0) return;
        this.#age = a;
    }

    display(){
        console.log("Details of Person is : ",this.name, this.#age, this.gender);
    }
}

const person1 = new Person("Anand", 22, "Male");
console.log(person1);
// Before updating private data member
person1.display()

// Updating Private data member
person1.ageSetter = 10;
console.log("Updated age is : ",person1.ageGetter);

person1.display()

// updating public data member
person1.name = "Pankaj";
person1.display()