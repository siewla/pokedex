const { pokedexControllers } = require('../controllers/pokemon');

module.exports = (app) => {
    app.get('/', pokedexControllers.index); //index route
    app.get('/new', pokedexControllers.init); //new route
    app.get('/:index', pokedexControllers.show); //show route
    app.post('/', pokedexControllers.create); //create/post route

    // app.get('/', home);
    // app.get('/budget', index); //index route
    // app.get('/budget/new', init); //new route
    // app.get('/budget/:index', show); //show route
    // app.post('/budget', create); //create/post route
    // app.put('/budget/:index', update); //update route
    // app.get('/budget/:index/edit', edit); //edit route
    // app.delete('/budget/all', deleteAll); //delete all route
    // app.delete('/budget/:index', deleteItem); //delete route
};
