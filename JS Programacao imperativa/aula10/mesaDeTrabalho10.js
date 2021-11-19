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
