// getting all the necessary elements 
const addBookButton = document.querySelector('.add-book-button');
const overlay = document.querySelector('#overlay')
const cancelButton = document.querySelector('.cancel-button')

//* Adding event listeners for all the neccesssary elements
addBookButton.addEventListener('click', showForm)
cancelButton.addEventListener('click', cancelForm)


function showForm() {
    return overlay.style.display = 'block';
}

function cancelForm() {
    return overlay.style.display = 'none';
}