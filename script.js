const myLibrary = [];

function Book(title, author, status) {
    if (!new.target) {
        console.log("Book() is a constructor. Use with 'new' keyword.");
    }
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary() {
    // this will need a click event
    // take parameters, create a book then store it in the array
}

const form = document.getElementById("addBookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const statusInput = document.getElementById("statusInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(titleInput.value);
    console.log(authorInput.value);
    console.log(statusInput.value);
});