const { pokemons } = require('./database/api.js');
document.getElementById("hp").innerHTML = pokemons[0]["hp"];