const senha = "123mudar";
let user = "Leandro";
const usuario = user + " Well come! Your acess has been released!";

function acessReleased(password){
    if(senha === password){
        console.log(usuario);
    }else{
        console.log("Invalid user!!!!!!")
    }
};


//Digite a senha para acessar:
acessReleased("123mudar");
