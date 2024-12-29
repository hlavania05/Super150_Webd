// foreach
// let arr = [10,20,30,40];
// arr.foreach(function(item, index){
//     console.log('index : ${index} --- Item : ${item}');
// })


// map
// let newArr = arr.map(function(item, index){
//     return item*2;
// })
// console.log(arr);
// console.log(newArr);

// filter
let newArr = arr.filter(function(item, index){
    if(item>= 50){
        return true;
    }
})
