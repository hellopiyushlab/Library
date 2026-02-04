# Library Application

A client-side web application for managing a personal reading list. The application allows users to add book entries, toggle reading status, and remove items from the collection.

![Application Screenshot](./Assets/screenshot.png)

## Overview

This project implements a basic "My Library" interface using vanilla JavaScript. It demonstrates DOM manipulation, event handling, and object-oriented programming principles (specifically constructor functions) to manage application state.

## Features

* **Book Management:** Users can input a book's title, author, and current reading status.
* **Dynamic Rendering:** Book cards are generated dynamically and appended to the DOM upon submission.
* **Status Toggling:** Clicking the status badge on a book card cycles through the available states ("Plan to Read", "Reading", "Finished").
* **Deletion:** Entries can be removed from the library via the delete icon.
* **Responsive Layout:** Utilizes CSS Grid and Flexbox for a responsive grid of cards.

## Technical Details

* **Technologies:** HTML5, CSS3, JavaScript (ES6+).
* **State Management:** Data is stored in a volatile global array (`myLibrary`). Data does not persist across page reloads.
* **Identification:** Uses `crypto.randomUUID()` to assign unique identifiers to book objects for accurate DOM targeting during update and delete operations.
* **Styling:** Custom CSS implementing a pastel gradient background and glassmorphism effects using `rgba` transparency.
* **Dependencies:**
    * FontAwesome (Icons)
    * Google Fonts (Roboto, Nunito)

## Setup and Usage

1.  Clone the repository.
2.  Ensure the `assets` folder contains the required image resources.
3.  Open `index.html` in a modern web browser.

## To-Do

* add database option