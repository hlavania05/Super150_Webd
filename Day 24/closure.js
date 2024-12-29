// function outer(){
//     let a = 100;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// let out = outer();
// out();  // jab bhi aap function ko return krte ho to vo akela return nhi hota infact vo 
        //  apna lexical scope ko bhi lekar jaega. and this is Closure



// Privatization
function counter(){
    let count = 0;
    return{ 
        getcount : function(){
            console.log(count);
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset : function(){
            count=0;
        }
    }
}
console.log(count) // --> giver error "count is not found"..
let count1 = counter();
console.log(count1.getcount());
count1.increment();
count1.decrement();
console.log(count1.getcount());
count1.reset();

