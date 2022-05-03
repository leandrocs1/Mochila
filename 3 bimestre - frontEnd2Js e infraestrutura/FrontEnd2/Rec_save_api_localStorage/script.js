let formPokemonNameRef = document.querySelector(".pokemon-name");
let buttonPokemonRef = document.querySelector("#pokemon-button");
let pokemonWrapRef = document.querySelector(".pokemons-infos");


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

for(pokemon of pokemons){
    
    pokemonWrapRef.innerHTML += `
            
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

function deleteFromStorage(){
    let excluirRefAll = document.querySelectorAll(".excluir");

    excluirRefAll.forEach((indexButton, valButton)=>{
        indexButton.addEventListener("click", ()=>{

            pokemons.splice(valButton, 1);
            
            localStorage.setItem("poke", JSON.stringify((pokemons)));

            location.reload();
        });
    });
};

deleteFromStorage();
