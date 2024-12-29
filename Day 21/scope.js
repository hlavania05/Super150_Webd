// ----lexical scope-----------------
// let a = 10;
// console.log(a);
// function fun(){
//     console.log(a);     // ans is 10 --> becuase value of a is globally access
// }

//---------------------------------------
let a = 10;
function fun1(){
    let b = 100;
    function fun2(){
        console.log(b);
        function fun3(){
            console.log(a);
        }
        fun3();
    }
    fun2();
}
fun1();




