const Product = (n,p,r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const prod1 = new Product("Paragon", 499.50, 4.6)
console.log(prod1);

// the theory of this keyword pointing to calling context is not applicable with arrow function
// We can't use Arrow Function as function constructor