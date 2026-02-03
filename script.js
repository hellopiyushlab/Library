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
    this.UUID = self.crypto.randomUUID(); // generate UUID for each book
}

// main function to invoke the constructor, and
// add the objects to the Array
function addBookToLibrary() {
    
    // get all the input elements
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const statusInput = document.getElementById("statusInput");

    // use the user input to make the object:
    const newBook = new Book(titleInput.value, authorInput.value, statusInput.value); 

    // push the new object into the myLibrary array
    myLibrary.push(newBook);

    // call the iterator function to show on screen
    myLibraryIterator();

    // logging the array in console
    console.log(myLibrary);
}


const form = document.getElementById("addBookForm");
// the event listener is on the form itself for submission
form.addEventListener("submit", (e) => {
    e.preventDefault();     // avoid reloading the page here
    addBookToLibrary();    // call the function
});

// function to iterate over the library,
// so that it can be shown in web page
function myLibraryIterator() {
    document.getElementById("contentDiv").innerHTML = "";
    for (let bookObject of myLibrary) {

        // DOM manipulation, adding the cards, and
        // and the content inside them

        // <div class="card">
        //      <div class="cardContent"> 
        //          <p class="title"></p>   
        //          <p class="author"></p> 
        //          <p class="status"></p>
        //      </div>
        //      <div class="cardOptions">
        //          <i class="deleteIcon"></i>
        //      </div> 
        // </div>
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = document.createElement("div");
        cardContent.classList.add("cardContent");
        const cardOptions = document.createElement("div");
        cardOptions.classList.add("cardOptions");

        const deleteOption = document.createElement("i");
        deleteOption.classList.add("deleteIcon", "fa-solid", "fa-trash");
        deleteOption.id = bookObject.UUID;
        

        const title = document.createElement("p");
        title.classList.add("title");
        title.textContent = bookObject.title;

        const author = document.createElement("p");
        author.classList.add("author");
        author.textContent = bookObject.author;

        const status = document.createElement("p");
        status.classList.add("status");
        status.textContent = bookObject.status;

        cardContent.append(title, author, status);
        cardOptions.append(deleteOption);
        card.append(cardContent, cardOptions);
        document.getElementById("contentDiv").append(card);

    }
}

document.getElementById("contentDiv").addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteIcon")) {
        const uuid = e.target.id;
        deleteBookFromLibrary(uuid);
    }
});

function deleteBookFromLibrary(UUID) {
    const indexToDelete = myLibrary.findIndex(obj => obj.UUID === UUID);
    if (indexToDelete !== -1) {
        myLibrary.splice(indexToDelete, 1);
    }
    myLibraryIterator();
}