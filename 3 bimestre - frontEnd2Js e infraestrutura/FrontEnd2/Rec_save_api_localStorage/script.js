let formPokemonNameRef = document.querySelector(".pokemon-name");
let buttonPokemonRef = document.querySelector("#pokemon-button");
let paginaDinamica = document.querySelector(".pokemons-infos");


//FETCH Pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/`).then(
        response =>{
            response.json().then(
                data => {
                    localStorage.setItem("poke", JSON.stringify((data.results)));
                }
            )
        }
    );
//FETCH-end Pokemon

//IMPRIMI NA TELA O LOCALSTORAGE
let pokemons = JSON.parse(localStorage.getItem("poke"));

function carregarPg(){
    for(pokemon of pokemons){
        paginaDinamica.innerHTML += `
                
        <div class="pokemons-infos-single">
            <button class="excluir">
                <img src="./img/excluir.png">
            </button>
            <div class="pokemon-name">
                <h2>Nome:</h2>
                <p class="name">${pokemon.name}</p>
            </div>
        </div>
        `
    };

    let excluirRefAll = document.querySelectorAll(".excluir img");
    excluirRefAll.forEach((indexButton, valButton)=>{
        indexButton.addEventListener("click", ()=>{
    
            paginaDinamica.innerHTML = ""
    
            if(paginaDinamica.innerHTML == ""){
            pokemons.splice(valButton, 1);
            // paginaDinamica.innerHTML = "";
            localStorage.setItem("poke", JSON.stringify((pokemons)));
            carregarPg()
    
            console.log(valButton)
            // location.reload();
            }
        });
    });

}
carregarPg()