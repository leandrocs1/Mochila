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

// function Teclado(cor, peso, led, ligarLed){
//     this.cor = cor,
//     this.peso = peso,
//     this.led = led;
// }

// let novoTeclado = new Teclado("vermelho", 1.5+"KG", "Com Led");

// /*metodo 1.... é possível adicionar mais objetos*/ 
// let teclado1 = Object.assign({
//     bateria: 5000
// }, novoTeclado);

// /*metodo 2*/ 
// let teclado2 = {...novoTeclado};

// console.log(teclado1)
// console.log(teclado2)

/********************** OBJETO ENDEREÇO ************************/

// let endereco = {
//     rua: `jogatina`,
//     cidade: `gradoro`,
//     cep: `28887-000` 
// }

// function percorrer(end){
//     for(let i in end){
//         console.log(i,end[i])
//     }
// }


// percorrer(endereco);


// function Endereco(rua,cidade,cep){
//     this.rua = rua,
//     this.cidade = cidade,
//     this.cep = cep
// };

// let endereco1 = new Endereco('a', 'b', 'c');
// let endereco2 = new Endereco('a', 'b', 'c');

// function comparar(endereco1, endereco2){
//     for(let key in endereco1){
//         if (endereco1[key] === endereco2[key]){
//             return true
//         }else{
//             return false
//         };
//     };
// };

// console.log(comparar(endereco1, endereco2));


// /**********************  ************************/
// let postagem = {
//     titulo: "Meu titulo",
//     mensagem: "Minha mensagem",
//     autor: "Nome do autor",
//     comentarios: [
//         {autor: "autor do coment"},
//         {mensagem: "mensagem coment"}
//     ],
//     estaAoVivo: true
// }

// console.log(postagem);


// /********************** CRIAR OBJETO POSTAGEM (CONSTRUCTOR: OQUE FOR DINAMICO NAO POSSO COLOCAR NO () DA FUNCAO.) ************************/

// function Postagem(titulo, mensagem, autor){
//     this.titulo = titulo,
//     this.mensagem = mensagem,
//     this.autor = autor,
//     this.vizualizacoes = 0,
//     this.comentarios = [],
//     this.estaAoVivo = false;
// }

// let postagem1 = new Postagem("TITULOU", "primeira mensagem", "Leandro Santos");

// console.log(postagem1);



/********************** CRIA FAIXA DE PRECO ************************/

// let faixa = [
//     {tooltip: "até R$700", minimo: 0, maximo: 700},
//     {tooltip: "até R$1000", minimo: 700, maximo: 1000},
//     {tooltip: "até ou mais", minimo: 1000, maximo: 999999}
// ];

// console.log(faixa)


/************** BUSCA DENTRO DE UM ARRAY(PRIMITIVOS) includes/indexOf *****************/ 


// let num = [0, 2, 8, 522];

// function encontrarNoArray(array, encontrar){
//     let posicao = array.indexOf(encontrar); // retorna a posição quando encontra e -1 quando não.
//     if(posicao == -1){

//         console.log("não encontrado")
//     }else{
//         console.log(`encontrado na posição: ${posicao}`)
//     }
// }
// encontrarNoArray(num, 522);

// console.log(num.includes(8)) //retorna true quando entra e false quando não.


/********** BUSCA elementos(TIPOS DE REFERENCIA) .find(function(element))***********/ 

// let num = [
//     {numero: 432}, {quantidade: 77}, {centimetros: 4}, {idade: 54}
// ];

// const buscarElemento = num.find((element)=>{
//     return element.quantidade === 77;

// });

// console.log(buscarElemento)


/********** REMOVER ELEMENTOS DE ARRAY ***********/ 
//num.push();
//num.unshift();
//num.splice();

// const num = [1,2,3,4,5,6];

// let ultimo = num.pop(); //REMOVER NO FINAL;
    // console.log(ultimo);
// let primeiro = num.shift(); // REMOVER NO INICIO;
    // console.log(ultimo);
// let meio = num.splice(2,1) // a partir de qual, quantos quero remover;
    // console.log(ultimo);


/********** ESVAZIANDO UM ARRAY ***********/ 

// const num = [1,2,3,4,5,6];
// num.length = 0; //SOLUÇÃO 1

// num.splice(0,num.length); //SOLUÇÃO 2

/********** COMBINANDO(JUNTANDO) E CORTANDO ARRAYS ***********/ 

// let primeiro = [1,2,3];
// let segundo = [4,5,6];

// let combinado = primeiro.concat(segundo); //junta os 2 arrays
// console.log(combinado);

// let cortado = combinado.slice(1,4);
// console.log(cortado)