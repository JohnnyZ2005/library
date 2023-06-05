// getting all the necessary elements 
const addBookButton = document.querySelector('.add-book-button');
const overlay = document.querySelector('#overlay')
addBookButton.addEventListener('click', showForm)

function showForm() {
    return overlay.style.display = 'block';
}