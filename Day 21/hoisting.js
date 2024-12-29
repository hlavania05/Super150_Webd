// fun();
// console.log(a);   // error --> can't 
// let a = 10;
// function fun(){
//     console.log("having fun");
// }

// fun();
// console.log(a);   // Undefined
// var a = 10;
// function fun(){
//     console.log("having fun");
// }

//-------------------Ques---------------------------
// console.log(a); // undefined
// console.log(b); // error
// console.log(c); // nothing
// var a = 4;
// let b = 6;
// const c = 5;                

//-----------------Ques--------------------------------
// var a = 10;
// console.log(a);
// var a = 100;
// console.log(a);

// function fun(){
//     var a  = 200;
//     console.log(a);
// }
// fun();
// console.log(a);


//-----------------Ques-----------------------------
// var a = 10;
// console.log(a);
// var a = 100;
// console.log(a);

// if(true){
//     var a  = 200;
//     console.log(a);
// }

// console.log(a);

//-----------------Ques-----------------------------
// let a = 10;
// console.log(a);
// a = 100;
// console.log(a);

// if(true){
//     let a  = 200;
//     console.log(a);
// }

// console.log(a);

//-------------------Ques-------------------------------
// var a = 10;  //10
// function fun(){
//     console.log(a);   // undefined
//     var a = 200;
//     console.log(a);   // 200
// }
// fun();
// console.log(a);  //10



//--------------------Ques----------------------------------
var a = 10;
if(true){
    console.log(a);  // 10
    var a = 200;
    console.log(b); // Error : beacuase of DTZ hosting
    console.log(a);
}
let b = 300;
console.log(b);



