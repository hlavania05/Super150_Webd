// let sach = true;
// console.log(sach);

// typecasting --> dharamparivartan --------------------------------------------

// 1. General equality (==) --> Datatypes not compared

// let ans = sach == 0;
// console.log(ans);   // true

// 2. Strict equality (===) --> Datatypes compared

// let ans2 = sach == 1;
// console.log(ans2);  // false

// -----------------------------------------------------------------------
// Examples with (&&) (and):
let age = 45;
if(age < 18 ){
    console.log("Chala ja");
}
else if (age <= 18 && age >25){
    console.log("ishq di gali wich no entry");
}
else{
    console.log("lele maza le");
}


//-----------------------------------------------------------------------------
// examples with (||) (or)
let attendance = 77;
let marks = 33;
if(attendance < 75 || marks > 33){
    console.log("pass");
}
else{
    console.log("fail");
}

//-----------------------------------------------------------------------------
// examples with (!) (not)
let ans3 = !true == false
console.log(ans3);


// ---------------------------------------------------------------------------

if(true)
    console.log("line1");
    console.log("line2");

if(false)
    console.log("line1");
    console.log("line2");


