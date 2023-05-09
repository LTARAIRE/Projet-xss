const commentsContainer = document.getElementById('comments-container');
const commentForm = document.getElementById('comment-form');

// Fonction pour afficher les commentaires
function displayComments(comments) {
    commentsContainer.innerHTML = '';
    comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
}

// Exemple de commentaires stockés dans un tableau
const comments = [
    'Premier commentaire',
    'Deuxième commentaire',
    'Troisième commentaire',
];

// Affiche les commentaires au chargement de la page
displayComments(comments);

// Gère la soumission du formulaire de commentaire
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    comments.push(comment);
    displayComments(comments);
    event.target.reset();
});

function submitComment(event) {
    event.preventDefault();
    const comment = {
        author: event.target.elements.author.value,
        text: event.target.elements.text.value,
        approved: false,
    };

    // Stockez le commentaire dans le localStorage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Affichez un message indiquant que le commentaire est en attente d'approbation
    alert('Votre commentaire a été soumis et est en attente d\'approbation par un administrateur.');
}

function displayComments() {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const approvedComments = comments.filter(comment => comment.approved);

    approvedComments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
      <p><strong>${comment.author}:</strong> ${comment.text}</p>
    `;
        commentsContainer.appendChild(commentElement);
    });
}
