const loginForm = document.getElementById('login-form');

// Fonction pour vérifier les identifiants de connexion (exemple simple)
function checkCredentials(username, password) {
    // Vérifiez les identifiants avec une source de données (par exemple, une base de données)
    return username === 'demo' && password === 'demo';
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (checkCredentials(username, password)) {
        alert('Connexion réussie !');
        navigateTo('home');
    } else {
        displayError('Nom d\'utilisateur ou mot de passe incorrect');
    }
});
