// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
let i = 1;
while(i <= 100){
    if(i % 2){
    console.log(i);
    }
    i++
};

// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.
while(i <= 100){
    if(i % 2){

    }else{
        console.log(i);
    }
    i++
};

// Escreva um aplicativo em Javascript que recebe um número inteiro e 
// mostra os números pares e ímpares (separados), de 1 até esse inteiro.

function contar(n){
    let loop = 1;
    let loopP = 1;
    while(loop <= n){
        if(loop % 2){
            console.log("impares "+loop);
        }
        loop++
    }
    while(loopP <= n){
        if(loopP % 2){
            
        }else{
            console.log("pares "+loopP);
        }
        loopP++
    }
};
contar(10)

// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.

function qntAlunos(q){
    if(q > 1){
        i = 1
        while(i <= q){
            console.log("digite a nota do aluno "+i)

            i++
        }
    }
    
}

qntAlunos(5)
