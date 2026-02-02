// Arrary to store the objects (Books)
const myLibrary = [];

// Constructor to make the Book instances
function Book(title, author, status) {
    if (!new.target) {
        console.log("Book() is a constructor. Use with 'new' keyword.");
    }
    this.title = title;
    this.author = author;
    this.status = status;
}

// main function to invoke the constructor, and
// add the objects to the Array
function addBookToLibrary() {
    // this will need a click event
    // take parameters, create a book then store it in the array
}

// getting the form element, and its sub elements
const form = document.getElementById("addBookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const statusInput = document.getElementById("statusInput");

// the event listener is on the form itself for submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // avoid reloading the page here
    // use the user input to make the object:
    const newBook = new Book(titleInput.value, authorInput.value, statusInput.value); 
    // push the new object into the myLibrary array
    myLibrary.push(newBook);

    // just for checking for myself:
    console.log(myLibrary);
});

// function to iterate over the library,
// so that it can be shown in web page
function myLibraryIterator() {

}