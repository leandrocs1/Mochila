let buttonReference = document.querySelector("#toSent");
let tituloReference = document.querySelector("#titulo");
let textoReference = document.querySelector("#texto");
let postReference = document.querySelector(".script");



///////////////// SISTEMA DE POSTAGEM NO STORAGE ////////////////
let posts = [
    
];

if(localStorage.length > 0){
    let localStorageReferences = JSON.parse(localStorage.post);

    posts = localStorageReferences;

    for(localStorageReference of localStorageReferences){


        postReference.innerHTML += `
            <div class="post">
                <h2>${localStorageReference.titulo}</h2>
                <p>${localStorageReference.texto}</p>
            </div>
            `;
    };
};

buttonReference.addEventListener("click", (event)=>{
    event.preventDefault();
    
    posts.push(
        {
            titulo: tituloReference.value,
            texto: textoReference.value
        }
    );

    localStorage.setItem("post", JSON.stringify(posts));

    

    postReference.innerHTML += `
    <div class="post">
        <h2>${tituloReference.value}</h2>
        <p>${textoReference.value}</p>
    </div>
    `;

    tituloReference.value = "";
    textoReference.value = "";
});





