const senha = "testando123";
let user = "Leandro";
const usuario = user + " Well come! Your acess has been released!";



function acessReleased(password){
    if(senha === password){
        console.log(usuario);
    }else{
        console.log("Invalid user!!!!!!");
    };

//    if(acumulatorPassIncorrect > 3){
  //      console.log("user blockeded");
    //}

    
};


//Digite a senha para acessar:


acessReleased("testando123");


let us = [1, "Leandro do Carmo Santos"];

for(let users of us){
    console.log(users);
}

let cad = {
    
    id: 01,
    name:"Leandro Santos",
    email:"carmosantosleandro@google.com"

};

for(let cadTipo in cad){
    console.log(cadTipo, cad[cadTipo])
}