// .map => faz um loop no array e retorna um novo array modificado// exemplo (return index *2);
// .filter => faz um loop no array e retorna os arrays que atendem as condições// exemplo(returm valor < 18);
// .reduce => Recebe 2 parametros um acumulador e o elemento atual EXEMPLO:
//                  acumulador + umNumero ... 0 + 5 // acumulador + umNumero = 5 + 7 // acumulador + umNumero = 12 + 16;
// .forEach => ao contrario dos outro, ele não retorna nada// sua unica função é inteirar(interação) o array.



// Crie um array de números pares, e utilizando a função .map() nesse array, 
// crie um novo array com apenas números ímpares.
let arrayPares = [2, 4, 6, 8, 10];

let arrayTransformarImpar = arrayPares.map((valor, index)=>{
    return valor+1;
});

// console.log(arrayTransformarImpar);

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() 
// para obter apenas esses dois índices com o nome Maria.

let nomes = ["Leandro", "Maria", "Samsumg", "Maria"];

let nomesFilterIndex = nomes.filter((valor, index)=>{
    if(valor == "Maria"){
        return index;
    }
});
// console.log(nomesFilterIndex);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os 
// números formatados. FALTA RESOLVER

let numeros = [2,2];

let adicionarIfem = numeros.reduce((acumulador, item)=>{
    return acumulador + item
});



// Crie um array de animais, após isso passe por cada índice utilizando o 
// .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

// let animais = ["cachorro", "gato", "vaca", "girafa", "Cachorro"];

// let montarFrase = animais.forEach((valor, index)=>{
//     console.log("O animal é "+ valor + " e a posição dele é numero "+ index);
// });
