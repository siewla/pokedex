//DATABASE 
const { pokemon , buildPokemon } = require('../database/pokemon');

const pokedexControllers = {
    index: (req, res) => {
        res.render('pokedex/index.ejs', { data: pokemon.getAll() });
    },

    show: (req, res) => {
        res.render('pokedex/show.ejs', { data : pokemon.getByIndex(req.params.index) });
    },

    init: (req, res) => {
        res.render('pokedex/new.ejs');
    },

    create: (req, res) => {
        const newPokemon = buildPokemon(req.body);
        pokemon.addNew(newPokemon);
        let index=pokemon.getLength()-1;
        res.redirect(`/${index}`);
    },

    deleteItem : (req, res) => {
        pokemon.deleteByIndex(req.params.index);
        res.redirect('/');
    },

    deleteAll : (req, res) => {
        pokemon.deleteAllItems();
        res.redirect('/');
    },

    edit : (req, res) => {
        res.render('pokedex/edit.ejs', { data : pokemon.getByIndex(req.params.index) });
    },

    update : (req, res) => {
        pokemon.updateByIndex(req.params.index, req.body);
        res.redirect(`/${req.params.index}`);
    }
};

module.exports = {
    pokedexControllers
};

