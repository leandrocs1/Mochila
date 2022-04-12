let buttonReference = document.querySelector("#button");
let titleReference = document.querySelector(".text1");
let tipReferences = document.querySelector(".tip");

let textarea =document.querySelector("#textarea");


buttonReference.addEventListener("click", (event)=>{
    event.preventDefault();
});

titleReference.addEventListener("mouseover", ()=>{
    tipReferences.style.display = "block";
});

titleReference.addEventListener("mouseout", ()=>{
    tipReferences.style.display = "none";
});


let count = 0;
textarea.addEventListener("keydown", ()=>{
    
    count++;
    document.querySelector(".capitureNumberDigt").innerHTML = count;
    document.querySelector(".capitureTextarea").innerHTML = textarea.value;
});




// window.onload = function (){
//     alert("Completamente carregada")
// };