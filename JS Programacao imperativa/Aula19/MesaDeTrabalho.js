// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas.
// Faça um programa que calcule e escreva:

// a maior e a menor altura do grupo;
    // O apply funciona como se você tivesse passado os valores do array como parâmetros da função max, 
    // e equivaleria a se digitar Math.max(0,12,13,2.... O primeiro parâmetro equivale ao escopo a ser 
    // usado na função, e neste caso, 
    // como é indiferente, passamos null, que representa o escopo global.

// a média de altura das mulheres;
// o número de homens.

function Conjunto(altura, sexo){
    this.altura = altura,
    this.sexo = sexo
};


let conjunto = [
    new Conjunto(1.75, "M"),
    new Conjunto(1.65, "F"),
    new Conjunto(1.60, "F"),
    new Conjunto(1.62, "F"),
    new Conjunto(1.65, "F"),
    new Conjunto(1.61, "F"),
    new Conjunto(1.75, "M"),
    new Conjunto(1.78, "M"),
    new Conjunto(1.74, "M"),
    new Conjunto(1.59, "F"),
    new Conjunto(1.54, "F"),
    new Conjunto(1.85, "M"),
    new Conjunto(1.80, "M"),
    new Conjunto(1.75, "M"),
    new Conjunto(1.69, "F"),
]


/// achar máximo e o minimo em um conjunto
function minAndMax(array){
    let altura = array.map((valor, indice)=>{
        return valor.altura;
    }); 

    console.log("A menor altura é: " + Math.min.apply(null, altura));
    console.log("A maior altura é: " + Math.max.apply(null, altura));
};
minAndMax(conjunto);


/// achar a média da altura de mulheres em um conjunto
function somarAlturaFeminina(array){
    let sexoF = array.filter((valor, indice)=>{
        if(valor.sexo === "F"){
            return valor.altura;
        }
    });

    let alturaF = sexoF.map((valor, indice)=>{
        return valor.altura;
    });

    let somaTotal = alturaF.reduce((acumulador, valor)=>{
        return acumulador+valor;
    });

    console.log("A média de altura Feminina é: " + somaTotal/sexoF.length);
};
somarAlturaFeminina(conjunto);


/// achar a quantidade de homens em um conjunto
function QntSexoMasculino(array){
    let m = array.filter((valor, indice)=>{
        return valor.sexo === "M"
    });

    let quantidade = m.length;

    console.log("Quantidade de homens: " + quantidade);
}
QntSexoMasculino(conjunto);





