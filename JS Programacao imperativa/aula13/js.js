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