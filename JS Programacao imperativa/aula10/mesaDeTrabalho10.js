let exemplos = ["arroz", "feijao", "carne", "marcarrao"];
//Acessar elementos específicos de um array.:
console.log(exemplos[3]);

//Modificar cada um dos elementos de um array e imprimi-los no console.
function modificar(array, index, novoValor){

    let resultado = array.indexOf(index)

    if(resultado >= 0){
        array[resultado] = novoValor;

    }else{
        console.log("Não existe essa palavra")
    }

}
modificar(exemplos, "feijao", "modificado");

console.log(exemplos);

//Adicionar elementos a um array.

exemplos.push("adicionar1", "adicionar2")

console.log(exemplos);

//Extrair elementos de um array

let [ , ,extrairCarne] = exemplos;
console.log(extrairCarne)

//Comparar elementos de um array com os elementos de outro.





/***************************************************************************************/
//Retorna a quantidade de arrays
let numbers =[22, 33, 54, 66, 72];
console.log(numbers.length);

//Retorna [1] o segundo array interno, [0]o primeiro nome dentro do segundo array.... spiderman
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);

/***************************************************************************************/
//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).

function reverter(array){
    array.reverse();
    console.log(array);
}

reverter(exemplos);

/***************************************************************************************/
//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter(array){
    invertido = array.reverse();
    
    console.log(invertido);
}

inverter(exemplos);


