console.log(pokemons[0]["hp"]);
console.log(pokemons.length);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const hp = document.querySelector('#hp');
const ATACK = document.querySelector('#ATACK');
const DEFENCE = document.querySelector('#DEFENCE');
const VELOCITY = document.querySelector('#VELOCITY');
const TOTAL = document.querySelector('#TOTAL');

//for(var i =0;i<pokemons.length;i++)
while(true)
{
    var i=0;
    while (i<6)
    {
        //await new Promise(r => setTimeout(r, 2000));
        //await sleep(5);
        await sleep(1 * 1000);
        hp.innerHTML =       pokemons[i]["hp"];
        ATACK.innerHTML =    pokemons[i]["ataque"];
        DEFENCE.innerHTML =  pokemons[i]["defesa"];
        VELOCITY.innerHTML = pokemons[i]["velocidade"];
        TOTAL.innerHTML = pokemons[i]["hp"]+
        pokemons[i]["ataque"]+
        pokemons[i]["defesa"]+
        pokemons[i]["velocidade"];
        i++;
    }
}
