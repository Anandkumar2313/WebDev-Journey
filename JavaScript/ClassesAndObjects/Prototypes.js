let myheros = ["thor", "spiderman"]
let dcheros = ["flash", "superman", "batman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anand = function(){
    console.log(`anand is present in all object`);
}

console.log(myheros.anand());
console.log(heroPower.anand());

Array.prototype.heyAnand = function(){
    console.log("Hitesh says Hii !");
}

console.log(myheros.heyAnand());
// console.log(heroPower.heyAnand());

// Inheritance
const User = {
    name : "Anand",
    email : "anand@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TAAssistant = {
    makeAssign: "JS Assign",
    fullTime: true,
    __proto__: teachingSupport      // It will provide all property of "teachingsupport" to "TAAssistant" i.e inheritance
}

console.log(TAAssistant.isAvailable);

Object.setPrototypeOf(teachingSupport, teacher)

// .prototype lga kr use globally bna sakte hai
String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
    
}

"Anand       ".trueLength()
"Shashwat    ".trueLength()