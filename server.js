//DEPENDENCIES
const express   =   require('express');
const app       =   express();
const POKEMON  =   require('./models/pokemon');

const port      =   process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.render('pokedex/index.ejs', { data: POKEMON });
});

app.get('/:index', (req, res) => {
    res.render('pokedex/show.ejs', { data : POKEMON[req.params.index] });
});

//LISTENER
app.listen(port, () =>{
    console.log(`Pokémon manager is listening on port : ${port}`);
});