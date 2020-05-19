const { pokedexControllers } = require('../controllers/pokemon');

module.exports = (app) => {
    app.get('/', pokedexControllers.index); //index route
    app.get('/new', pokedexControllers.init); //new route
    app.get('/:index', pokedexControllers.show); //show route
    app.post('/', pokedexControllers.create); //create/post route
    app.delete('/all', pokedexControllers.deleteAll); //delete all route
    app.delete('/:index', pokedexControllers.deleteItem); //delete route
    app.put('/:index', pokedexControllers.create); //update route
    app.get('/:index/edit', pokedexControllers.edit); //edit route
};
