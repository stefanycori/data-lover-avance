// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import pokemon, { default as dataPokemon } from "./data/pokemon/pokemon.js";



const slicedPokemons = dataPokemon.pokemon.slice(0, 50);           //Función que separa el objeto tipo array, elegimos 50 pokemones
export default slicedPokemons;


export const templateCard = (data)=>{
  let htmlCode = ``; //contiene el codigo html

  data.forEach(dataPokemon => {
    
    htmlCode = html + `
    <div class="card">
    <img src="${dataPokemon.img}"> 
    <div class="contenido">
      <h3>${dataPokemon.name}</h3>
      <p>Número: ${dataPokemon.num} </p>
        <p>Tipo: ${dataPokemon.type}</p>
       <p>Resistencia: ${dataPokemon.resistant}</p>
        <p>Debilidades: ${dataPokemon.weaknesses}</p>
      </p>
    </div>
  </div>`
  });
  
  const pokemonCards = document.getElementById('container');
  pokemonCards.innerHTML = htmlCode;

}





//aline

export const sortPokemon = (data) =>{
  const sortedPokemons = data.sort( (a, b) => {
    return a.name.localeCompare(b.name);
    /*if (a.name > b.name) {
      return 1;
    }
    /*if (a.name > b.name) {
      return 1;
    }*/
  });
  return sortedPokemons;
}


 export const sortReverse = (data) => {
  const sortedZA = data.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return sortedZA;
}
 export const typeOrder = (data) => {
  const orderByType = data.sort(function (a, b) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  });
  return orderByType;
}


