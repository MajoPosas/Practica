const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

const deportes = [
  {
    nombre: "Fútbol",
    descripcion: "Deporte de equipo que se juega con un balón entre dos equipos de once jugadores cada uno.",
    requisitos: "Campo, balón, zapatos adecuados.",
    ranking: 5
  },
  {
    nombre: "Baloncesto",
    descripcion: "Deporte de equipo que se juega en una cancha con un balón y dos aros elevados.",
    requisitos: "Cancha, balón, zapatillas de baloncesto.",
    ranking: 4
  },
  {
    nombre: "Natación",
    descripcion: "Deporte individual o de equipo que consiste en desplazarse en el agua.",
    requisitos: "Piscina, traje de baño, gafas de natación.",
    ranking: 5
  }
];

app.get('/', (req, res) => {
  res.render('index', { deportes });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
