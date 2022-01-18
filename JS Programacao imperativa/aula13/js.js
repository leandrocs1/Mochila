// function List(capacity) {
//     var collection = [];

//     if (capacity != null) {
//         collection[capacity];
//     }
// }



// List(1)

// let a = "O export where Ok!";

// module.exports =  a;

/*********************** IF ELSE and % === 0 ***********************/

// const resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if(entrada % 3 === 0 && entrada % 5 === 0){
//         return"fizzBuzz";
//     }if(entrada % 3 === 0){
//         return "fizz";
//     }if(entrada % 5 === 0){
//         return"Buzz"; 
//     }else{
//         return"Não é um número";
//     }
// ;
// }

/*********************** FOR ***********************/

// exibirTipo(5);

// function exibirTipo(limite){
//     for(let i = 0; i <= limite ; i++){
//         if(i % 2 === 0){
//             console.log(i," PAR")
//         }else{
//             console.log(i," IMPAR")
//         }
//     }
    
// }

/********************** FOR IN ************************/


// let filmes = {
//     nome: "matrix",
//     data: 1988,
//     autor: "sadf"
// };

// exibirPropriedade(filmes);


// function exibirPropriedade(obj){
//     for(prop in obj){
//         if(typeof obj[prop] === 'string'){
//             console.log(prop,obj[prop])
//         };
//     };
// };


/********************** FOR-OF ARRAY(MÉDIA) ************************/


// const array = [100, 80, 95];

// console.log(mediaDoAluno(array));

// function calcularMedia(array){
//     let soma = 0;
//     for(let valor of array){
//         soma += valor;
//     }
//     return soma/(array.length);
// }

// function mediaDoAluno(notas){

//     const media = calcularMedia(notas);

//     if (media < 59) return 'F';
//     if (media < 69) return 'D';
//     if (media < 79) return 'C';
//     if (media < 89) return 'B';
//     return 'A';

// }


/********************** EXIBIR ASTERISCOS ************************/



// function exibirAsteriscos(quantidade){
//     let asterisco = '';
//     for(let i = 0 ; i <= quantidade ; i++){
//         asterisco += '*'
//         console.log(asterisco);
//     };

    
// };

// exibirAsteriscos(10);


// function Celular(marcaCelular, tamanhoTela, capacidadeBateria){

//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.capacidadeBateria = capacidadeBateria;
// }

// let celular = new Celular("samsung", 7.5, 5500);

// console.log(celular);

// let banco = {
//     nomeCompleto: {
//         nome: "Leandro",
//         sobrenome: "Santos"
//     },
//     conta: 558254,
//     idade: "32 anos"
// };

// console.log(banco)


/********************** CLONAR OBJETOS ************************/

function Teclado(cor, peso, led, ligarLed){
    this.cor = cor,
    this.peso = peso,
    this.led = led;
}

let novoTeclado = new Teclado("vermelho", 1.5+"KG", "Com Led");



let teclado2 = {...novoTeclado};

console.log(teclado2)