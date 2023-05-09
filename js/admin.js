function displayUnapprovedComments() {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const unapprovedComments = comments.filter(comment => !comment.approved);

    unapprovedComments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
      <p><strong>${comment.author}:</strong> ${comment.text}</p>
      <button onclick="approveComment(${index})">Approuver</button>
    `;
        commentsContainer.appendChild(commentElement);
    });
}

function approveComment(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments[index].approved = true;
    localStorage.setItem('comments', JSON.stringify(comments));
    displayUnapprovedComments();
}

displayUnapprovedComments();
