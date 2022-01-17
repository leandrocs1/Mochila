require(js.js/)

// function Cadastrar_Cliente(numero_da_conta, tp_de_conta, saldo, nome_titular){
//     this.numero_da_conta = numero_da_conta;
//     this.tp_de_conta = tp_de_conta;
//     this.saldo = saldo;
//     this.nome_titular = nome_titular;
// }

// var clientes = [];
// var cadastro = clientes.push(
//     new Cadastrar_Cliente(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'), 
//     new Cadastrar_Cliente(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'),
//     new Cadastrar_Cliente(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'),
//     new Cadastrar_Cliente(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'),
//     new Cadastrar_Cliente(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'),
//     new Cadastrar_Cliente(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'),
//     new Cadastrar_Cliente(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'),
//     new Cadastrar_Cliente(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden'),
//     new Cadastrar_Cliente(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'),
//     new Cadastrar_Cliente(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett'),
//     new Cadastrar_Cliente(7782019552, 'Conta Corrente', 25489, 'Loren Lius'),
//     new Cadastrar_Cliente(1005151205, 'Conta Corrente', 10000000000, 'Catarina Rigamonte')
//     );



//     let banco = {
//         cliente: clientes,
//         consultarCliente: function(titular){
//             clientes.forEach((e)=>{
//                 if(titular == e.nome_titular){
//                     console.log(e);
//                 }
//             });
//         },
//         deposito: function(titular, qnt_a_depositar){
//             clientes.forEach((e)=>{
//                 let novoSaldo = []
//                 if(titular == e.nome_titular){
//                     novoSaldo = qnt_a_depositar+e.saldo
//                     e.saldo = novoSaldo


//                     console.log("Depósito realizado, seu novo saldo é: "+novoSaldo)
//                 }
//             });
//         },
//         saque: function(titular, qnt_a_retirar){
//             clientes.forEach((e)=>{
//                 let novoSaldo = [];
//                 let calcSaldo = []
//                 if(titular == e.nome_titular){
//                     calcSaldo = e.saldo - qnt_a_retirar;
//                     if(calcSaldo >= 0){
//                         novoSaldo = calcSaldo;
//                         e.saldo = novoSaldo
//                         console.log("Saque realizado, seu novo saldo é: "+novoSaldo)
//                     }else{
//                         console.log("Fundos insuficientes")
//                     }
//                 }
                    
                    
                
//             })
//         }
        
//     }

//     banco.deposito('Catarina Rigamonte', 10);
//     banco.saque('Catarina Rigamonte', 10);
//     banco.consultarCliente('Catarina Rigamonte');
    


////// Propriedade unica


// let array = [
//     {nome: "Leandro", idade: 32},
//     {nome: "Catarina", idade: 36}
// ];

// console.log(push({}))

// function propriedadeUnica(ar, str){
//     str = 
//     array.forEach((e, i)=>{
//         console.log(ar[i])

//     });
   
// };

// propriedadeUnica(array);

// function criarObjeto(nome, sobreNome){
//     let pessoa ={};

//     pessoa.nome = nome;
//     pessoa.sobreNome = sobreNome;

//     return objeto;
// };

// let pessoa = criarObjeto("Leandro","Santos");

// console.log(pessoa)



// function criadorDeObjeto(nome, sobrenome){
//     let pessoa = {};
//     pessoa.nome = nome;
//     pessoa.sobrenome = sobrenome

//     return pessoa;

// };


// let pessoa = criadorDeObjeto("Leandro", "Sani");
// console.log(pessoa.sobrenome);





function Cadastro_Pessoal(nome, email, senha){
    this.nome = nome;
    this.email = email;
    this.senha = senha;
}

let primeiro_cadastro = new Cadastro_Pessoal("Leandro", "carmosantosleandro@gmail.com", "123321")
console.log(primeiro_cadastro)


