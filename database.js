const sqlite3 = require('sqlite3').verbose();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('./myDatabase.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Initialiser les tables de la base de données
const initDatabase = () => {
    db.serialize(() => {
        // Créer la table des utilisateurs
        db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      isAdmin BOOLEAN NOT NULL
    )`);

        // Créer la table des commentaires
        db.run(`CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      text TEXT NOT NULL,
      approved BOOLEAN NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`);
    });
};

// Ajouter un utilisateur
const addUser = (username, password, isAdmin) => {
    db.run('INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)', [username, password, isAdmin], (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('User added successfully.');
        }
    });
};

// Récupérer un utilisateur par nom d'utilisateur
const getUser = (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            callback(row);
        }
    });
};

// Ajouter un commentaire
const addComment = (userId, text, approved) => {
    db.run('INSERT INTO comments (user_id, text, approved) VALUES (?, ?, ?)', [userId, text, approved], (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Comment added successfully.');
        }
    });
};

module.exports = {
    db,
    initDatabase,
    addUser,
    getUser,
    addComment,
};
