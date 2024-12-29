let arr = [10,60,64,87,"sam"];
// console.log(arr);   // array acces
// console.log(arr[3]);   // access of array values

//  let arr0 =[10,20,[100,200,[6000],0],"sam",60];     // 2D Array
// console.log(arr[2]);   // ---> [100,200,[6000],0]
// console.log(arr[2][2][0]);     //---> 6000 



// ---------------------------------------------------------------------------------------

// Array methods

// length
console.log(arr.length);

// push
arr.push(64);
let returntype = arr.push(34);
console.log(returntype);
console.log(arr);

// pop
let return0 = arr.pop();
console.log(return0);
console.log(arr);

// unshift
arr.push(64);
let return_unshift = arr.unshift(34);
console.log(return_unshift);
console.log(arr);

// shift
let return_shift = arr.shift();
console.log(return_shift);
console.log(arr);



