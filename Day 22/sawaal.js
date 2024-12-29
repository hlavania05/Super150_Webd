// const a;
// a = 100   // error 

//------------------------------------------------------

// var naam = "chhavi";
// var a = 100;
// function kaju_moye_moye(){
//     console.log(a);  //100
//     var c = 20; 
//     console.log(c);  //20
// }

// kaju_moye_moye();
// console.log(naam);   // chhavi

//------------------------------------------------------

// var a = 100;
// let b = 200;
// function abrakadabra(){
//     var c = 300;
//     let d = 400;
//     console.log(c);
//     console.log(d);
// }
// abrakadabra();
// console.log(a);
// console.log(b);

//------------------------------------------------------

var a = 100;
let b = 200;
if(a == '100'){
    var a = 300;
    let b = 400;      // can be redeclare in different scope
    console.log(a);
    console.log(b);  
}
console.log(a);
console.log(b);