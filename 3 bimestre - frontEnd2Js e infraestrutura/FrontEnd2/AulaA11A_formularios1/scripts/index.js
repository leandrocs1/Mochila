const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", () => {
/// Escreva aqui o seu código, seguindo estas orientações passo a passo:
// 1. Obter o valor introduzido no input do e-mail.
  let email = document.querySelector("#email-input").value;



// 2. Obter o valor introduzido no input de senha.
  let password = document.querySelector("#password-input").value;


// 3. Obter o valor do input de rádio.
  let elementos = document.querySelectorAll(".age-input");
  elementos.forEach((elemento, indice)=>{
    console.log(elemento)
    let value = elemento.value;
    console.log(value);
    let check = elemento.checked;
    console.log(check);

// 5. Validar se o utilizador for maior de idade. Caso contrário, mostramos
// uma mensagem de erro: "Tem de ser maior de idade para se registar no site".

    if((indice === 0) && (check === true)){
      window.onload = alert("Site acessado");
    }if((indice === 1)&& (check === true)){
      window.onload =  alert("Tem de ser maior de idade para se registar no site");
    }
  });


// 4. Obter o valor do input com o checkbox.
  let checkTermos = document.querySelector("#tyc-input").checked


// 6. Validamos se o utilizador aceitou os termos e condições. Caso contrário, exibimos
// uma mensagem de erro: "Deve aceitar os termos e condições para se registar no site".
  






// 7. Por fim, se tudo estiver correto, exibimos um objeto no console com as informações definidas pelo utilizador. 
console.log(`email: ${email}`)
console.log(`passsword: ${password}`)
if(checkTermos === false){
  alert("Deve aceitar os termos e condições para se registar no site")
}else{
  console.log("O usuário aceitou os termos")
}

});
