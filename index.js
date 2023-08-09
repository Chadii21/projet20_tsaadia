const btn = document.querySelector(".btn")
const page1 = document.querySelector(".page1")
const field = document.querySelector(".field")
const input = document.querySelector("input")
const form = document.querySelector("form")

 btn.addEventListener("click", () => {
    if (input) {
    console.log("remplissez ce champ");
     alert("Remplissez ce champ!")
 }
 })
form.onsubmit = () => {
}
{/* <div class="error-text">Email can't be blank</div> */}
