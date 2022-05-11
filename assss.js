function Cadastro(email, password){
    this.email = email
    this.password = password
};

let cadastros = [
    new Cadastro(
    "carmosantos@gmail.com", 090522
    ),
    new Cadastro(
    "catarina@gmail.com", 235587
    )

];


    


console.log(cadastros[1].email);
