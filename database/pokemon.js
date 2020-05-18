const POKEMON  = require('../models/pokemon');

class Pokemon{
    constructor (id, name, img, type, stats, damages, misc){
        this.index = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.stats = stats;
        this.damages = damages;
        this.misc = misc;
    }
}

const buildPokemon = ({ id, name, img, type, stats, damages, misc }) => {
    return new Pokemon (id, name, img, type, stats, damages, misc);
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
    }

};

module.exports ={
    pokemon,
    buildPokemon,
};


