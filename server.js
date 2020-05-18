//DEPENDENCIES
const express   =   require('express');
const app       =   express();
const POKEMONS  =   require('./models/pokemon');

const port      =   process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('Working');
});

//LISTENER
app.listen(port, () =>{
    console.log(`Pokémon manager is listening on port : ${port}`);
});