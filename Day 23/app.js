// var a = 10;
// let b = 100;
// function kajuLalla(){
//     var c = "sam";     // local scope c is undefined
//     console.log(c);
// }
// kajuLalla();
// console.log(a);    
// console.log(b);

// var a = 10;
// let b = 100;
// function kajuLalla(){
//     var c = "sam";    // local scope c ki value unavailable
//     console.log(c);   
// }
// kajuLalla();
// console.log(a);
// console.log(b);


// var a = 100;
// let b = 10;
// function fun(){
//     console.log(a);
//     let a = 1000;
//     console.log(a);
// }
// fun();
// console.log(a);
// console.log(b);


// var a = 100;
// let b = 10;
// if(true){
//     console.log(a);
//     var a = 1000;
//     let b = 2000;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);


// first class function :-
let bhai = function sam(){
    console.log('hello');
}
sam();



// higher order function :
function fun1(fn){
    console.log('fun1');
    fn();
}
function fun2(){
    console.log('fun2');
}
fun1(fun2); 


function fun1(){
    console.log("inside fun1");
    function fun2(){
        console.log("inside fun2");
    }
    return fun2;
}
let val = fun1();
console.log(val);