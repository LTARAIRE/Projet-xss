const signupForm = document.getElementById('signup-form');

// Fonction pour enregistrer un nouvel utilisateur (exemple simple)
function registerUser(username, password) {
    // Enregistrez le nouvel utilisateur dans une source de données (par exemple, une base de données)
    console.log('Nouvel utilisateur enregistré:', { username, password });
}

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    registerUser(username, password);
    alert('Inscription réussie !');
    navigateTo('home');
});
