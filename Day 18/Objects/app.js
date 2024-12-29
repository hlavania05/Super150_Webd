//let person = {name : "Kaju", age : 1, favourite : "red"};
console.log(person);

// dot notation
console.log(person.name);

//----------------------------------------------------------
let person = {
    name : "Kaju", 
    age : 1, 
    favourite : "red", 
    wishlist : function kismish(){
        console.log("happy diwali")
    }
};

//  note : jab hum object ke andar funtion call krte h to use key se call krte h and 
// function ka name dena important nhi h

console.log(person.name);
// console.log(person.wishlist);  // wrong
console.log(person.wishlist());  // right
// console.log(person.kismish())  // wrong

// when we call a function inside a object then is is known as method

