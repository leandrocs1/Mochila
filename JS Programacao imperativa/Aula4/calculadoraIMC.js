
let nome = [
    "José da Silva",
    "Carlos de Souza",
    "Aline Ferreira",
    "Ana Paula"
];

let idade = [27, 28, 33, 26];

let peso = [83.5, 80.1, 63.7, 55.0];

let altura = [1.70, 1.76, 1.53, 1.62];

let imc = altura[0] * altura[0] / peso[0];

let plano = true;


function calcular(a,a2,p){
    return altura[a] * altura[a2] / peso[p],
    console.log(nome[a]+" tem "+idade[a2]+" anos e seu índice de massa corporal é de "+ imc);
}

calcular(0,0,0);




