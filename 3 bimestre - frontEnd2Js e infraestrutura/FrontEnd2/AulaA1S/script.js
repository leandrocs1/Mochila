let numbersPlus = [1, 2, 4, 8];

// function newNumberPlus2(array){

//     console.log(array[0]);

//     let firstOperation = array[0] + array[1];
//     console.log(firstOperation);

//     let secondOperation = firstOperation + array[2];
//     console.log(secondOperation);

//     let thirdOperation = secondOperation + array[3];
//     console.log(thirdOperation);

// };

// newNumberPlus2(numbersPlus);


// /* Possível solução para a prática integradora da Aula 1 */

// //Declarando vetor de números inteiros
// let vectorNumbers = [1, 2, 4, 8];

// // variável do tipo numérica que é instancia com o valor '0'(ela vai armazenar o prox result)
// let resultSum = 0;

// //Percorrendo o vetor com a estrutura de repetição 'for' (comun)
// for (let index = 0; index < vectorNumbers.length; index++) {  
//     //vetorNumeros.length -> Representa o tamanho do vetor (de acordo comn a quantidade de elementos presentes)
    
//     //Recebendo e somando o valor recebido
//     resultSum += vectorNumbers[index];
//     //Outra maneira de calcular
//     //resultadoSoma = resultadoSoma + vetorNumeros[index];
    
//     //Exibindo o valor presente no vetor
//     console.log(resultSum);
// }


let acumulate = 0;
for(i = 0 ; i < numbersPlus.length ; i++){
    
    
    acumulate += numbersPlus[i];

    console.log(acumulate);

};