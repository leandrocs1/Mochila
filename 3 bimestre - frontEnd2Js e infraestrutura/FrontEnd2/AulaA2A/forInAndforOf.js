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


for(let user of users){   //USAR O MESMO NOME É UMA BOA PRÁTICA. (No singular register)
    console.log(user);

}