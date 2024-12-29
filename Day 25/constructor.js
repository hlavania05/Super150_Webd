// function sam(){}
// let out = sam();
// console.log(out);
// ---------------------------------

// Constructor 
// function Sam(){}
// let out = new Sam(); // Sam is now constructor function
// console.log(out); // --> sam{};


function Sam(name, age){
    this.naam = name;
    this.umar = age;
}
Sam.prototype.description = function(){
    console.log(`My name is ${this.naam}`);
}
let out1 = new Sam('Harshita', 20);
console.log(out1);

let out2 = new Sam('Aditi', 21);
console.log(out2);

console.log(Sam.__proto__);
console.log(Sam.prototype);
console.log(Sam.__proto__.__proto__ === Object.prototype);



