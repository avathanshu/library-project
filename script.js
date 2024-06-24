const cardGrid = document.querySelector(".card-grid");
const btnBook = document.querySelector(".newBook");
const dialog = document.querySelector("dialog")
const submit = document.querySelector(".submit")
let bookTitle = document.querySelector("#bookTitle").value
let bookAuthor = document.querySelector("#bookAuthor").value
let bookPages = document.querySelector("#bookPages").value

dialog.returnValue = "bookTitle";

const myLibrary = [];

function Book(title, author, pages, read="Unread") {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`
    }
}

Book.prototype.Status = function () {
    if (this.read === "Unread") {
        this.read = "Read";
        return this.read;
    }

    if (this.read === "Read") {
        this.read = "Unread";
        return this.read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    publishBook(myLibrary)
}


btnBook.addEventListener("click", () => {
    dialog.showModal();
})


submit.addEventListener("click", () => {
    bookTitle = document.querySelector("#bookTitle").value
    bookAuthor = document.querySelector("#bookAuthor").value
    bookPages = document.querySelector("#bookPages").value
    let newBook = new Book(bookTitle, bookAuthor, bookPages)
    addBookToLibrary(newBook.title);
})

function publishBook(array) {
    for (let i = 0; i < array.length; i++) {
        let card = document.createElement("div")
        cardGrid.appendChild(card);
        card.className = "cards"

        let title = document.createElement("div")
        card.appendChild(title)
        title.className = "title"

        newBook = new Book(bookTitle, bookAuthor, bookPages);
        title.textContent = newBook.info();

        let btnRow = document.createElement("div")
        card.appendChild(btnRow)
        btnRow.className = "button-row"

        let remove = document.createElement("button")
        btnRow.appendChild(remove)
        remove.className = "remove"
        remove.textContent = "Remove"

        remove.addEventListener("click", () => {
            card.remove()
        })

        let markRead = document.createElement("button")
        btnRow.appendChild(markRead)
        markRead.className = "markRead"
        markRead.textContent = "Unread"
        read = "unread"

        markRead.addEventListener("click", () => {
            if (markRead.textContent === "Read") {
                markRead.textContent = "Unread"
                read = "unread"
            }

            else if (markRead.textContent === "Unread") {
                markRead.textContent = "Read";
                read = "read"
            }
        })

    }
    myLibrary.pop(bookTitle)
}