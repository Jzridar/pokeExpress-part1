// Load express
const express = require('express');
const pokemon = require('./models/pokemon.js');
const port = 3000
// Create our express app
const app = express();

app.set("view engine","jsx");
app.engine("jsx",require("jsx-view-engine").createEngine())

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.send('<h1>Welcome to the Pokemon App!</h1>');
});


app.get('/pokemon/', (req, res)=> {
    res.render('Index', { pokemon: pokemon });
  });

  app.get('/pokemon/:id',(req,res)=>{
    res.render('Show',{pokemon:pokemon[req.params.id]})
  })
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(port, function () {
  console.log('Listening on port 3000');
});