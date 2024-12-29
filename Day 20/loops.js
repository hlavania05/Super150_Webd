// for - in
let obj = {name : "kaju", age : "1", papa : "Samarth bhaiya"};
for(let i in obj){
    console.log(i);
    // console.log(obj.i)     // wrong because inside loop obj will consider as a arr
    console.log(obj[i]);
}
//but outside the loop
console.log(obj[i])  // wrong
console.log(obj.i);


// for-of
let arr = [10,30,29,57,36];
for(let item of arr){
    console.log(item);
}

