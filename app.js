const express = require('express');
const app = express();






const heureDeTravailMiddleware = (req, res, next) => {
  const heureActuelle = new Date(); // Récupère la date actuelle
  const jourDeLaSemaine = heureActuelle.getDay(); // Récupère le jour de la semaine
  const heure = heureActuelle.getHours(); // Récupère l'heure actuelle

  if (jourDeLaSemaine >= 1 && jourDeLaSemaine <= 5 && heure >= 9 && heure <= 17) {
    next();
  } else {
    res.status(503).send('L\'application est fermée pendant les heures de travail');
  }
};

app.use(heureDeTravailMiddleware);


// Définir le moteur de rendu sur ejs
app.set('view engine', 'ejs');

// Spécifier le dossier contenant les vues
app.set('views', './views');

// Démarrage du serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port http://localhost:3000');
});

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('home'); // Assurez-vous d'avoir un fichier index.ejs dans le dossier 'views'
});


// Route pour la page de services 
app.get('/nos-services', (req, res) => {
    res.render('services'); // Assurez-vous d'avoir un fichier services.ejs dans le dossier 'views'
});

// Route pour la page de contact  
app.get('/nous-contacter', (req, res) => {
    res.render('contact'); // Assurez-vous d'avoir un fichier contact.ejs dans le dossier 'views'
}
);
