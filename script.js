
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
    title.classList.add('bookTitle');
    card.appendChild(title);

    const author = document.createElement('h2');
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement('h2');
    pages.textContent = `${book.pages} pages`;
    card.appendChild(pages);

    const status = document.createElement('button');
    status.id = book.title;
    status.textContent = book.read === true ? '\u2713 READ' : 'NOT READ';
    card.appendChild(status);
    status.addEventListener('click', () => {
            console.log('fs');
            myLibrary.forEach(book => {
                    if (book.title === status.id) 
                         book.read = !(book.read);
                });
            displayBooks();
        })

    const remove = document.createElement('button');
    remove.classList.add('removeBook');
    remove.id = book.title;
    remove.textContent = 'REMOVE BOOK';
    card.appendChild(remove);
    remove.addEventListener('click', () => {
            myLibrary = myLibrary.filter(b => b.title != remove.id);
            displayBooks();
        })

    booksList.appendChild(card);
}

let myLibrary = [
    new Book('The 7 Habits of Highly Effective People', 'Stephen R. Covey', 336, true),
    new Book('How to Win Friends and Influence People', 'Dale Carnegie', 288, false),
    new Book('The Power of Now', 'Eckhart Tolle', 258, true),
    new Book('Man’s Search for Meaning', 'Viktor Frankl', 184, false),
    new Book('Awaken the Giant Within', 'Tony Robbins', 432, true),
    new Book('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 224, false),
    new Book('Mindset: The New Psychology of Success', 'Carol S. Dweck', 288, true),
    new Book('The 4-Hour Work Week', 'Timothy Ferriss', 368, false),
    new Book('The 48 Laws of Power', 'Robert Greene', 464, false),
    new Book('12 Rules for Life: An Antidote to Chaos', 'Jordan Peterson', 432, true),
    new Book('Beyond Good and Evil', 'Friedrich Nietzsche', 200, false),
    new Book('The Divine Comedy', 'Dante Alighieri', 928, true)
];

const booksList = document.getElementById('container');

const form = document.querySelector('form');

let currentPrompt = form;
displayBooks();

const addBookButton = document.createElement('button');
addBookButton.classList.add('addBook');
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


