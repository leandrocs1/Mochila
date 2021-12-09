let frutas = new Array("banana", "laranja", "limao");
frutas.shift(); // frutas = "banana"
frutas.splice(1, 1, "uva"); // frutas = "banana", "uva"
for(let i=0 ; i<frutas.length; i++){
    console.log(frutas[i] + " | ")
}


