const moment = require('moment');

const heureDeTravailMiddleware = (req, res, next) => {
  const heureActuelle = moment();
  const jourDeLaSemaine = heureActuelle.day();
  const heure = heureActuelle.hour();

  if (jourDeLaSemaine >= 1 && jourDeLaSemaine <= 5 && heure >= 9 && heure <= 17) {
    next();
  } else {
    res.status(503).send('L\'application est fermée pendant les heures de travail');
  }
};

app.use(heureDeTravailMiddleware);