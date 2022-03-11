// for in ele intera sobre um objeto:
let object = {
    marca: "ford",
    ano: 2022
};

for(let index in object){
    console.log(object[index]);
}

// O for of por sua vez intera sobre array e strings:

let elementInteract = ["Leandro do Carmo Santos", 1989, 32];

for(let prop of elementInteract){
    console.log(prop);
};
