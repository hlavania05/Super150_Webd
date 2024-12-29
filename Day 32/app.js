console.log("hello");

// let inp = document.querySelector('input');
// let h2 = document.querySelector('h2');
// inp.addEventListener("input", function(event){
//     h2.innerText = event.target.value;
//     h2.style.backgroundColor = 'plum';
// });


let form = document.querySelector("form");
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(form.elements.username.value);
    console.log(form.elements.email.value);
})