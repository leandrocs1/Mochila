let buttonReference = document.querySelector("#toSent");
let body = document.querySelector("body");
let themeData = localStorage.theme

function tema(){
    if(localStorage.theme === "true"){
        body.classList.add("black")
    }
}
tema()



buttonReference.addEventListener("click", (event) =>{
    event.preventDefault();
    
  
    localStorage.setItem("theme", body.classList.toggle("black"))

});










