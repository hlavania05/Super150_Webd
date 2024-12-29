let step1 = function(){
    return new Promise((resolve, reject) => {
        console.log("plz wait image is being selected")
        setTimeout(() => {
            resolve("image selected hogyiii meri jaaan......");
        }, 4000);
    });
};


let step2 = function(image){
    return new Promise((resolve, reject) => {
        console.log("plz wait filter is being applied on image selected");
        setTimeout(() => {
            resolve("kr liaa thobdaaaa sundar......");
        }, 3000);
    });
}

let step3 = function(filter){
return new Promise((resolve, reject) => {
    console.log("plz wait for the caption in the selected image");
    setTimeout(() => {
        resolve("caption applied hogiyaa baby girl........");
    }, 5000);
});
}

let step4 = function(caption){
return new Promise((resolve, reject) => {
    console.log("Uploading in continuation for selected image");
    setTimeout(() => {
        resolve("Image uploaded meri jaaaaan ........");
    }, 4000);
});
}


step1()
.then(function(image){
console.log(image)  
return step2(image)
})
.then(function(filter){
console.log(filter)
return step3(filter)
})
.then(function(caption){
console.log(caption)
return step4(caption)
})
.then(function(upload){
console.log(upload)
})