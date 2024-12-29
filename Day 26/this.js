
// ------------- 1. Object/method calling --> object----------------------
// let obj = {
//     a : 10,
//     b : 200,
//     fn : function (){
//         console.log(this);
//     },
// };

// obj.fn();   // this calling is dependent on the object


// ----------------2. direct calling --> window -----------------------------

// Example 1
// function fn(){
//     console.log(this);
// }
// fn();

// // Exmaple 2
// let obj2 = {
//     a : "sam",
//     fn : function(){
//         console.log(this);
//     },
// };
// let ans = obj2.fn;
// ans();


// // Example 3 

// console.log(this);



// // Example 4
// let obj3 = {
//     a : 10,
//     fn : function(){
//         function sam(){
//             console.log(this);
//         }
//         sam();
//     },
// };
// obj3.fn();

// //  Example 5
// let obj4 = {
//     a : 10,
//     fn : function (){
//         function sam(){
//             console.log(this);
//         }
//         let a = sam;
//         return a;
//     },
// };
// let out = obj4.fn();
// out();


// 3. ---------------Constructor function---------------------

function Sam(naam){
    this.hello = naam;
    console.log(this);
}
let obj1 = new Sam("Bhoomi");
let obj2 = new Sam("harshita");
console.log(obj1)
console.log(obj2)


// 5. ------------------Arraw function ---------------------
// depend krta h ki iske parent ka this kisko point kr rha h 

// Example 1 --> in this case fn function point out to obj that why it will point out to Window.
// let objj = {
//     a : 20,
//     fn : () => {
//         console.log(this);
//     }
// }
// objj.fn();


// // Example 2
// let obj_ = {
//     a : 100,
//     fn : function(){
//         console.log(this);
//         let sam = () => {
//             console.log(this);
//         };
//         sam();
//     },
// };
// obj_.fn();

