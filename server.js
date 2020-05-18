//DEPENDENCIES
const express   =   require('express');
const app       =   express();

const port      =   process.env.PORT || 3000;

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));

require('./routes/router')(app);

//LISTENER
app.listen(port, () =>{
    console.log(`Pokémon manager is listening on port : ${port}`);
});