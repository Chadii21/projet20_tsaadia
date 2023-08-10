// const btn = document.querySelector(".btn")
// const page1 = document.querySelector(".page1")
// const field = document.querySelector(".field")
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

document.getElementById("inscription").addEventListener("submit", function(e){
    var erreur;
    var First = document.getElementById("First");
    var Last = document.getElementById("Last");
    var hg = document.getElementById("hg");
    var Number = document.getElementById("Number");
    var Age = document.getElementById("Age");
    var Male = document.getElementById("Male");
    var Female = document.getElementById("Female");
    var country = document.getElementById("country");
    
    if (!country.value) {
        erreur = "Insert your country!"
    }
    if (!Age.value) {
        erreur.innerHTML = "Insert age!"
    }
    if (!Number.value) {
        erreur = "Insert your Number!"
    }
    if (!hg.value) {
        erreur = "Insert your Email!"
    }
    if (!Last.value) {
        erreur = "Insert your Last name !"
    }
    if (!First.value) {
        erreur = "Insert your First name!"
    }
})
