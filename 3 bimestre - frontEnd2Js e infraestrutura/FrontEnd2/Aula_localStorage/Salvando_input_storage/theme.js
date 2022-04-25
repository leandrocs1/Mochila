let buttonThemeReference = document.querySelector(".theme");
let bodyReference = document.querySelector("body");
let themePreference = [];

if(localStorage.theme == "true"){
    bodyReference.classList.toggle("black")
}


buttonThemeReference.addEventListener("click", (event)=>{
    event.preventDefault();

    localStorage.setItem("theme", bodyReference.classList.toggle("black"));

});
