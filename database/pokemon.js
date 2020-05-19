const data  = require('../models/pokemon');

const POKEMON = JSON.parse(JSON.stringify(data));

class Pokemon{
    constructor (name, img, type, stats, damages){
        this.name = name;
        this.img = img;
        this.type = type;
        this.stats = stats;
        this.damages = damages;
    }
}

const buildPokemon = ({ name, img, type, stats, damages }) => {
    return new Pokemon ( name, img, type, stats, damages);
};

const pokemon = {
    getAll () {
        return POKEMON.map(buildPokemon);
    },

    getByIndex (index) {
        return buildPokemon(POKEMON[index]);
    },

    addNew (newObj) {
        POKEMON.push(newObj);
    },

    getLength () {
        return POKEMON.length;
    },

    updateByIndex (index, updateObj) {
        POKEMON[index] = updateObj;
    },

    deleteByIndex (index) {
        POKEMON.splice (index, 1);
    },

    deleteAllItems () {
        POKEMON.splice (0, POKEMON.length);
    },
};

module.exports ={
    pokemon,
    buildPokemon,
};


