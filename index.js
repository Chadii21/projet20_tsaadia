
// const btn = document.querySelector(".btn")
// const page1 = document.querySelector(".page1")
// const field = document.querySelector(".field")


// 1er essai
// const input = document.querySelector("input")
// const form = document.querySelector("form")

// let myForm = document.querySelector(".myForm");

// myForm.addEventListener("submit", function(e) {
//     let myInput = document.querySelector(".myInput");
    
//     if (myInput.value.trim() === "") {
//         let myError = document.querySelector(".error");
//         myError.innerHTML = "Ce champ est requis !";
//         myError.style.color = "red";
//         console.log("jjh");
//         e.preventDefault();
//     }
// })


//  btn.addEventListener("click", () => {
//     if (input) {
//    // console.log("remplissez ce champ");
//     //  alert("Remplissez ce champ!")
//  }
//  })
// form.onsubmit = () => {
// }
// {/* <div class="error-text">Email can't be blank</div> */}

// 

// 

let myForm = document.getElementById("form")
let First = document.getElementById("First")
let Last = document.getElementById("Last")
let Age = document.getElementById("Age")
let Number = document.getElementById("Number")
let Email = document.getElementById("Email")
let Country = document.getElementById("country")
let button = document.querySelector(".fieldButton")
let error = document.querySelector(".error")
let error2 = document.querySelector(".error2")
let error3 = document.querySelector(".error3")
let error4 = document.querySelector(".error4")
let error5 = document.querySelector(".error5")
let error6 = document.querySelector(".error6")

button.addEventListener('click', function (e) {
    if(!First.value) {
        error.innerHTML='*Please insert your first name';
        error.style.color= 'red'
    }
    else{
        First.style.background= 'green';
    }
    e.preventDefault(); 
})
button.addEventListener('click', function (e) {
    if(!Last.value) {
        error2.innerHTML='*Please insert your last name';
        error2.style.color= 'red'
    }
    else{
        Last.style.background= 'green';
    }
    e.preventDefault(); 
})
button.addEventListener('click', function (e) {
    if(!Age.value) {
        error5.innerHTML='*Please insert your age';
        error5.style.color= 'red'
    }
    else{
        Age.style.background= 'green';
    }
    e.preventDefault(); 
})
button.addEventListener('click', function (e) {
    if(!Number.value) {
        error4.innerHTML='*Please insert your Number';
        error4.style.color= 'red'
    }
    else{
        Number.style.background= 'green';
    }
    e.preventDefault(); 
})
button.addEventListener('click', function (e) {
    if(!Email.value) {
        error3.innerHTML='*Please insert your email';
        error3.style.color= 'red'
    }
    else{
        Email.style.background= 'green';
    }
    e.preventDefault(); 
})
button.addEventListener('click', function (e) {
    if(!Country.value) {
        error6.innerHTML='*Please insert your country';
        error6.style.color= 'red'
    }
    else{
        Country.style.background= 'green';
    }
    e.preventDefault(); 
})
