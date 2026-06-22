const Product = function (n,p,r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("Samsung A17", 23000, 4.8)
console.log(p);
