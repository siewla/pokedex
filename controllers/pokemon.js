//DATABASE 
const { pokemon } = require('../models/pokemon');

const pokedexControllers = {
    index: (req, res) => {
        res.render('pokedex/index.ejs', { data: pokemon.getAll() });
    },

    search: (req,res) => {
        res.render('pokedex/search.ejs', { data: pokemon.getAll() });
    },

    show: (req, res) => {
        const realID = parseInt(req.params.index) + 1;
        const id = `${realID}`;
        res.render('pokedex/show.ejs', { 
            data : pokemon.getByIndex(req.params.index),
            id : id
        });
    },

    init: (req, res) => {
        res.render('pokedex/new.ejs');
    },

    create: (req, res) => {
        const index=pokemon.getLength();
        const newPokemon = pokemon.getByIndex(Math.floor(Math.random() * index));
        const nameFromForm = JSON.parse(JSON.stringify(req.body.name));
        newPokemon.name = nameFromForm;
        const tagsFromForm = req.body.type;
        const tags = tagsFromForm.split(',');
        newPokemon.type = tags;
        newPokemon.img = req.body.img;
        pokemon.addNew(newPokemon);
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
        res.render('pokedex/edit.ejs', { 
            data : pokemon.getByIndex(req.params.index),
            index : req.params.index
        });
    },
};

module.exports = {
    pokedexControllers
};

