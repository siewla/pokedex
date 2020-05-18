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

    create: (req, res) =>{
        console.log(req.body);
        // const newPokemon = buildPokemon(req.body);
        // pokemon.addNew(newPokemon);
        // let index=pokemon.getLength()-1;
        // res.redirect(`/budget/${index}`);
        res.redirect('/');
    }
};

module.exports = {
    pokedexControllers
};

