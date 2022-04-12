let main = document.querySelector("#postMain");



let posts = [
    
];

function digiteUmTexto(){
    let digiteOTitulo = prompt("Digite o seu titulo");
    let digiteOTexto = prompt("Digite o conteudo");
    let digiteONickName = prompt("Digite o seu nick");

    posts.push({
        titulo: digiteOTitulo,
        texto: digiteOTexto,
        nickName: digiteONickName
    });
};

digiteUmTexto()

document.querySelector(".add").addEventListener("click", ()=>{
    
    digiteUmTexto()

        main.innerHTML += `
    
        <div class="postArea">
            <h1 class="titulo-post">${post.titulo}</h1>
            <p class="texto-post">${post.texto}</p>
            <p class="nick-post">${post.nickName}</p>
        </div>
    
        `;

        console.log(posts)
    
});





for(post of posts){


    main.innerHTML += `

    <div class="postArea">
        <h1 class="titulo-post">${post.titulo}</h1>
        <p class="texto-post">${post.texto}</p>
        <p class="nick-post">${post.nickName}</p>
    </div>

    `;

};
