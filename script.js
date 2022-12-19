
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `{title} by ${author}, ${pages}, ${read === true ? 'read' : 'not read yet'}`;
    }
}


function displayBooks() {
    booksList.innerHTML = '';
    booksList.appendChild(currentPrompt);
    for(book of myLibrary)
        displayBook(book);
}


function displayBook(book) {
    const card = document.createElement('div');
    card.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('h2');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('h2');
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const remove = document.createElement('button');
    remove.classList.add('removeBook');
    remove.id = book.title;
    remove.textContent = 'REMOVE';
    card.appendChild(remove);
    remove.addEventListener('click', () => {
            myLibrary = myLibrary.filter(b => b.title != remove.id);
            displayBooks();
        })

    const status = document.createElement('button');
    status.classList.add('status');
    status.textContent = book.read === true ? 'read' : 'not read';
    card.appendChild(status);

    booksList.appendChild(card);
}

let myLibrary = [];
const booksList = document.getElementById('container');

const form = document.querySelector('form');

let currentPrompt = form;
displayBooks();

const addBookButton = document.createElement('button');
addBookButton.textContent = 'ADD BOOK';
currentPrompt = addBookButton;
displayBooks();

addBookButton.addEventListener('click', () => {
       currentPrompt = form; 
       displayBooks();
    });


form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newBook = new Book(form.elements[0].value,
                               form.elements[1].value,
                               form.elements[2].value,
                               form.elements[3].checked == true ? true : false);
        myLibrary.push(newBook);
        console.log('fds')
        form.reset();
        currentPrompt = addBookButton;
        displayBooks();
    });


