// for in ele intera sobre um objeto:
let object = { //Usar um nome que tenha haver.
    marca: "ford",
    ano: 2022
};

for(let objectDetail in object){ //Usar um nome que tenha haver.
    console.log(object[objectDetail]); // UTILIZAR O COLCHETES E ASPAS PARA PROCURAR ESPECIFICO ['marca']
}

// O for of por sua vez intera sobre array e strings:

let users = ["Leandro do Carmo Santos", 1989, 32];  //USAR O MESMO NOME É UMA BOA PRÁTICA.(registers)

<<<<<<< HEAD:FrontEnd2/AulaA2A/forInAndforOf.js
for(let user of users){   //USAR O MESMO NOME É UMA BOA PRÁTICA. (No singular register)
    console.log(user);
=======
for(let prop of elementInteract){
    console.log(prop);
>>>>>>> 75301a9913371a9939556cd899a74b2d8ef607d1:3 bimestre - frontEnd2Js e infraestrutura/FrontEnd2/AulaA2A/forInAndforOf.js
};
