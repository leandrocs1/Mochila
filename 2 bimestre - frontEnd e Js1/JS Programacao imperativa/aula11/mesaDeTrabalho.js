let filmes= ["star wars", "totoro",  "rocky", "pulp fiction", "a vida é bela"];
let filmesAnimados= ["mickey", "monica",  "sitio", "transformers", "add novo"];


// console.log(filmes)
// function converterMaiusculas(array){
//     for(let i=0 ; i<array.length ; i++){
//     array[i] = array[i].toUpperCase();
//     }
//     return array;
// }

// console.log(converterMaiusculas(filmes));

///////////////////////////////////////////////////////////////////////////

// function passagemDeElementos(array1, array2) {
    
//     for(let i = 0 ; i<array2.length ; i++){
//       if(i<array2.length)      
//         array1.push(array2.pop())
//     }
    
//     return array1;
   
// }

// let novoArquivo = [];

// novoArquivo = passagemDeElementos(filmes,filmesAnimados)

// console.log(novoArquivo);

///////////////////////////////////////////////////////////////////////////
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// function compararClassificacoes(asia, europa) {
//   let comparacoesAsiaEuropa = []
//   comparacoesAsiaEuropa[0] = asia[0] === europa[0]
//   comparacoesAsiaEuropa[1] = asia[1] === europa[1]
//   comparacoesAsiaEuropa[2] = asia[2] === europa[2]
//   comparacoesAsiaEuropa[3] = asia[3] === europa[3]
//     return comparacoesAsiaEuropa
// }

// console.log(compararClassificacoes(asiaScores, euroScores))

///////////////////////////////////////////////////////////////////////////
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function compararClassificacoes(asia, europa) {
    let comparacoesAsiaEuropa = []
    
    for(a=0 ; a < asia.length ; a++)
        for(e=0 ; e < europa.length ; e++){
            for(c=0 ; c < 9 ; c++){
                comparacoesAsiaEuropa[c] = asia[a] === europa[e]
            }
        }

    return comparacoesAsiaEuropa
}

console.log(compararClassificacoes(asiaScores, euroScores))