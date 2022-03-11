const senha = "testando123";
let user = "Leandro";
const usuario = user + " Well come! Your acess has been released!";
let acumulatorPassIncorrect = 1;


function acessReleased(password){
    if(senha === password){
        console.log(usuario);
    }else{
        console.log("Invalid user!!!!!!")
        acumulatorPassIncorrect++;
    };

    if(acumulatorPassIncorrect > 3){
        console.log("user blockeded");
    }


    console.log(acumulatorPassIncorrect);
    
};


//Digite a senha para acessar:




acessReleased("testando12");


