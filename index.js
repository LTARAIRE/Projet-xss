const express = require('express');
const bodyParser = require('body-parser');
const { addUser, getUser, addComment } = require('./database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour analyser les requêtes POST avec du JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers statiques dans le dossier "public"
app.use(express.static('public'));

// Route d'inscription
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    addUser(username, password, false);
    res.status(200).json({ message: 'User registered successfully.' });
});

// Route de connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    getUser(username, (user) => {
        if (user && user.password === password) {
            res.status(200).json({ message: 'User logged in successfully.', isAdmin: user.isAdmin });
        } else {
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    });
});

// Route pour ajouter un commentaire
app.post('/comments', (req, res) => {
    const { userId, text } = req.body;
    addComment(userId, text, false);
    res.status(200).json({ message: 'Comment submitted successfully.' });
});

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
