// fucntion declaration
function diwali(){
    console.log("Happy diwali");
}

// function calling
diwali();

//---------------------------------------------------

function sum(){
    let a = 10;
    let b = 20;
    console.log(a+b);
}
sum();

//-----------------------------------------------------

// parameterised function 
function sum2(a, b){
    console.log(a+b);
}
sum2(10,30);       // --> 40

//-----------------------------------------------------

function kajuLalla(a, b){
    console.log(a+b);          // --> NaN
    console.log(typeof(a+b))    //--> number (Nan is also a number)
}
kajuLalla(250);   


//-----------------------------------------------------------

function kajuLalla(a=60, b){
    console.log(a+b);        
}
kajuLalla(250);     // NaN 

//-----------------------------------------------------------

function kajuLalla(a){
    // Case 1
    let kaju;
    console.log(a+kaju);   // NaN
    console.log(typeof(kaju));   // undefine  
    
    // Case 2
    let kaju2 = null;
    console.log(a+kaju2);    // NaN
    console.log(typeof(kaju2));     // object
}
kajuLalla(250);   

// ---------------------------------------------------------





