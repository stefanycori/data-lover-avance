

import slicedPokemons, { example } from './data.js';
import {sortPokemon,sortReverse,typeOrder,templateCard} from './data.js'


let button = document.getElementById('btn-validar');
let inputText = document.getElementById('caja-texto');
let container = document.getElementById('container');


//se muestra los cards al inicio
window.addEventListener('load', function() {
  templateCard(slicedPokemons);
});




button.addEventListener("click", searchPokemon);

function searchPokemon() {

    let html = "";

    slicedPokemons.forEach(poke => {
        if (poke.name == inputText.value) {

            html =
                `
                <div class="card">
                <img src="${poke.img}"> 
                <div class="contenido">
                    <h3>${poke.name}</h3>
                    <p>Número: ${poke.num} </p>
                    <p>Tipo: ${poke.type}</p>
                    <p>Resistencia: ${poke.resistant}</p>
                    <p>Debilidades: ${poke.weaknesses}</p>
                    </p>
                </div>
                </div>`;

            container.className = 'flex';
            container.innerHTML = html;
        }

    })
}


const sortingList = document.getElementById("selectSort");

sortingList.addEventListener("change", (e) => {

  const valueOption = e.target.value;
  if (valueOption === "1") {
    const dataSortAZ = sortPokemon(slicedPokemons);
    templateCard(dataSortAZ);
  }
  if (valueOption === "2") {
    const dataSortZA = sortReverse(slicedPokemons);
    templateCard(dataSortZA);
  }
  if (valueOption === "3") {
    const dataSortType = typeOrder(slicedPokemons);
    templateCard(dataSortType);
  }
});















