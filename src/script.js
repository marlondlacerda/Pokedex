const sectionPokeCard = document.querySelector('.pokemon-status');
const sectionPokeList = document.querySelector('.list');

const generateID = (id) => {
  if (id.toString().length === 1) return `00${id}`;

  if (id.toString().length === 2) return `0${id}`;

  return id;
}

const headerCard = (pokemonIndex = 1 ) => {
  const header = document.createElement('div');
  header.classList.add('header-card');

  const findIndex = pokemons
    .findIndex(pokemon => pokemon.id === pokemonIndex);

  const headerContainer1 = document.createElement('div');
  headerContainer1.classList.add('header-container-1');
  
  const headerContainer2 = document.createElement('div');
  headerContainer2.classList.add('header-container-2');
  
  const pokeName = document.createElement('h1');
  pokeName.innerHTML = pokemons[findIndex].nome;
  headerContainer1.appendChild(pokeName);
  
  const pokeId = document.createElement('h1');
  pokeId.innerHTML = generateID(pokemons[findIndex].id);
  headerContainer1.appendChild(pokeId);
  
  const pokeType = document.createElement('h1');
  pokeType.innerHTML = pokemons[findIndex].tipo;
  headerContainer2.appendChild(pokeType);
  
  header.appendChild(headerContainer1);
  header.appendChild(headerContainer2);

  return header;
}


const test = (event) => {
  const index = event.path[1].classList[1];

  sectionPokeCard.innerHTML = pokemons[index].nome;
}

const generateList = () => {
  return pokemons.forEach((pokemon, index) => {
    const listCard = document.createElement('div');
    listCard.classList.add(`list-card-pokemon`, index);
    const listCardImg = document.createElement('img');
    listCardImg.src = pokemon.img;
    listCardImg.classList.add('list-card-img');
    listCardImg.style.width = '100px';
    listCard.appendChild(listCardImg);
    
    const listCardName = document.createElement('h3');
    listCardName.innerHTML = pokemon.nome;

    listCardName.classList.add('list-card-name');
    listCard.appendChild(listCardName);

    sectionPokeList.appendChild(listCard);
  });
};

const generateDefaultCard = () => {
  const defaultCard = document.createElement('div');
  defaultCard.classList.add('pokemon-card');

  defaultCard.appendChild(headerCard());

  sectionPokeCard.appendChild(defaultCard);
}

window.onload = () => {
  generateList();
  generateDefaultCard();

  sectionPokeList.addEventListener('click', (e) => test(e));
};
