function navigateTo(page) {
    switch (page) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'login':
            window.location.href = 'login.html';
            break;
        case 'signup':
            window.location.href = 'signup.html';
            break;
        case 'comments':
            window.location.href = 'comments.html';
            break;
        default:
            console.error('Page inconnue:', page);
    }
}

// Fonction pour afficher un message d'erreur
function displayError(errorMessage) {
    alert(errorMessage);
}
