const sectionPokeCard = document.querySelector('.pokemon-status');
const sectionPokeList = document.querySelector('.list');

const generateID = (id) => {
  if (id.toString().length === 1) return `00${id}`;

  if (id.toString().length === 2) return `0${id}`;

  return id;
}

const findIndex = (id) => {
  return pokemons.findIndex(pokemon => pokemon.id === id);
}

const headerCard = (id) => {
  const header = document.createElement('div');
  header.classList.add('header-card');

  const index = findIndex(id);

  const headerContainer1 = document.createElement('div');
  headerContainer1.classList.add('header-container-1');

  const headerContainer2 = document.createElement('div');
  headerContainer2.classList.add('header-container-2');

  const pokeName = document.createElement('h1');
  pokeName.innerHTML = pokemons[index].nome;

  const pokeId = document.createElement('h1');
  pokeId.innerHTML = generateID(id);

  const pokeType = document.createElement('h1');
  pokeType.innerHTML = pokemons[index].tipo;

  const pokeImg = document.createElement('img');
  pokeImg.src = pokemons[index].img;

  headerContainer1.append(...[pokeName, pokeId]);
  headerContainer2.append(...[pokeType, pokeImg]);  
  header.append(...[headerContainer1, headerContainer2]);

  return header;
}


const generateStatusTypes = (index, status) => {
  const statusTypes = ['HP', 'Ataque', 'Defesa', 'Velocidade', 'Total'];

  return statusTypes.forEach((type) => {
    const typeStatus = document.createElement('h2');
    typeStatus.innerHTML = `${type}: ${pokemons[index][type.toLowerCase()]}`;

    return status.appendChild(typeStatus);
  });
}

const statusCard = (id) => {
  const status = document.createElement('div');
  status.classList.add('status-div');

  const index = findIndex(id);

  const statusTitle = document.createElement('h1');
  statusTitle.innerHTML = 'Status';

  generateStatusTypes(index, status);

  return status;
}

const test = (event) => {
  const index = event.path[1].classList[1];

  sectionPokeCard.innerHTML = pokemons[index].id;
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

const generateCard = (id = 1) => {
  const defaultCard = document.createElement('div');
  defaultCard.classList.add('pokemon-card');

  defaultCard.appendChild(headerCard(id));
  defaultCard.appendChild(statusCard(id));

  sectionPokeCard.appendChild(defaultCard);
}

window.onload = () => {
  generateList();
  generateCard();

  sectionPokeList.addEventListener('click', (e) => test(e));
};
