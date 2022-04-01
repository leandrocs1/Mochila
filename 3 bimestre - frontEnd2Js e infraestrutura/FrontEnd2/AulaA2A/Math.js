//     Math.random

let stone = 1;
let paper = 2;
let scissors = 3;

let aleatory = parseInt(Math.random()*3+1); 
// *3 vai retornar até o numero 3;
// o +1 é para anular o numero 0;
// sendo assim, vai sortear o number 1, 2 ou 3;

// console.log(aleatory);


//     Math.max

let simpleMath = Math.max(4, 7, 14, 1, 5);
console.log(simpleMath);

//achando o maior numero dentro de um array;
let numbers = [4, 7, 14, 1, 5];
let max = numbers.reduce((fix, acum)=>{
    return Math.max(fix, acum);
});
console.log(max);

//achando com a function apply;
var myArray= [0,12,13,2,1273,28,1];
var strong = Math.max.apply(null, myArray );
console.log(strong);