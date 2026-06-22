function Product (n,p,r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const prod1 = new Product("Paragon", 499.50, 4.6)
console.log(prod1);

let x = {
    p: Product
};

x.p("Relaxo", 259, 4.5)
console.log(x);
