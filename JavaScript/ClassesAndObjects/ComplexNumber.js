class ComplexNumber{

    #real;
    #imaginary;
    constructor(r,i){
        this.#real = r;
        this.#imaginary = i;
    }

    display(){
        if(this.#imaginary >= 0){
            return `${this.#real} + ${this.#imaginary}i`;
        }
        return `${this.#real} - ${Math.abs(this.#imaginary)}i`;
    }

    get real(){
        return this.#real;
    }

    get imaginary(){
        return this.#imaginary;
    }

    addComplexNumber(cn){   // cn is the complex number passed as argument
        const r = this.#real + cn.#real       // this refers to whichever object calls the method
        const i = this.#imaginary + cn.#imaginary
        return new ComplexNumber(r,i);

    }

    subComplexNumber(cn){   // cn is the complex number passed as argument
            const r = this.#real - cn.#real    // this refers to whichever object calls the method
            const i = this.#imaginary - cn.#imaginary
        return new ComplexNumber(r,i);
    }

    mulComplexNumber(cn){
        const r = (this.#real * cn.#real) - (this.#imaginary * cn.#imaginary)
        const i = (this.#real * cn.#imaginary) + (this.#imaginary * cn.#real)
        return new ComplexNumber(r,i);
    }

    divComplexNumber(cn){
        const denominator = (cn.#real * cn.#real) + (cn.#imaginary * cn.#imaginary)
        if(denominator === 0){
            throw new Error(
                "Division by zero complex number is not allowed"
            );
        }
        
        const r = ((this.#real * cn.#real) + (this.#imaginary * cn.#imaginary))/denominator
        const i = ((this.#imaginary * cn.#real)- (this.#real * cn.#imaginary))/denominator
        return new ComplexNumber(r,i);
    }
}

const cn1 = new ComplexNumber(3,4);
console.log("complex number 1 is : ",cn1.display());

const cn2 = new ComplexNumber(4,5);
console.log("complex number 2 is : ",cn2.display());

// Addition
const cn3 = cn1.addComplexNumber(cn2);
console.log("(c1+c2) is : ",cn3.display());
// Subtraction
const cn4 = cn1.subComplexNumber(cn2);
console.log("(c1-c2) is : ",cn4.display());
// Multiplication
const cn5 = cn1.mulComplexNumber(cn2);
console.log("(c1*c2) is : ",cn5.display());
// Division
const cn6 = cn1.divComplexNumber(cn2);
console.log("(c1/c2) is : ",cn6.display());
