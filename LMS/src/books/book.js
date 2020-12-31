var books = [];
var activatedBook;

const isbnEl = document.getElementById("ISBN");
const bookNameEl = document.getElementById("bookName");
const authorEl = document.getElementById("author");
const publisherEl = document.getElementById("publisher");
const quantityEl = document.getElementById("quantity");
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById("updateBtn");
const table_container = document.getElementById("table-container");
var tbody = document.getElementById("tabBody");

function getBooks() {
    let books;

    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

function displayBookDetails() {

    var books = getBooks();
    if(books.length == 0){
        tbody.innerHTML = `<tr>
        <td colspan = "9">
        <h6 class = "text-danger">No Records Found</h6>
        </td>
        </tr> `;
        return;
    }

    tbody.innerHTML = books.map(bookObj => {
        return `<tr>
        <td>${bookObj.id}</td>
        <td>${bookObj.isbn}</td>
        <td>${bookObj.bookName}</td>
        <td>${bookObj.author}</td>
        <td>${bookObj.publisher}</td>
        <td>${bookObj.quantity}</td>
        <td>${bookObj.issuedBook}</td>
        <td><a onclick="editBook(${bookObj.id})"><i class="fa fa-pencil-square-o"></i></a></td>
        <td><a onclick="deleteBook(${bookObj.id})"><i class="fa fa-times "></i></a></td> 
        </tr>
        `
    }).join('');
}


function addBookDetails() {
    const isbn = isbnEl.value;
    const bookName = bookNameEl.value;
    const author = authorEl.value;
    const publisher =publisherEl.value;
    const quantity = +quantityEl.value;
    var newBook = {};
   
    if (isbn === '' || bookName === '' || author === '' || publisher === '' || quantity === '') {
        showAlert('Please fill the details', 'error');
    } else {
        newBook['id'] = generateID();
        newBook['isbn'] = isbn;
        newBook['bookName'] = bookName;
        newBook['author'] = author;
        newBook['publisher'] = publisher;
        newBook['quantity'] = quantity;
        newBook['issuedBook'] = 0;
        
        var books = getBooks();
        books.push(newBook);
        showAlert("Book details added successfully!", 'success');
        localStorage.setItem('books', JSON.stringify(books));
        displayBookDetails();
        clearFields();
    }
}
function generateID() {
    return Math.floor(Math.random() * 1000);
  }
document.addEventListener('DOMContentLoaded', displayBookDetails);

function deleteBook(bookId) {
    var books = getBooks();
    var foundBook = books.find((book) => book.id == bookId);
    var index = books.indexOf(foundBook);
    books.splice(index, 1);

    showAlert('Deleted Successfully!', 'success');
    localStorage.setItem('books', JSON.stringify(books));
    displayBookDetails();
}

function editBook(bookId) {
    var books = getBooks();
    var foundBook = books.find((book) => book.id == bookId);
    var index = books.indexOf(foundBook);
    var bookToBeEdited = books[index];
    activatedBook = bookToBeEdited;

    isbnEl.value = bookToBeEdited.isbn;
    bookNameEl.value = bookToBeEdited.bookName;
    authorEl.value = bookToBeEdited.author;
    publisherEl.value = bookToBeEdited.publisher;
    quantityEl.value = bookToBeEdited.quantity;

    updateBtn.style.display = 'inline-block';
    addBtn.style.display = 'none';
}

function updateBookDetails() {
    var books = getBooks();
    const isbn = isbnEl.value;
    const bookName = bookNameEl.value;
    const author = authorEl.value;
    const publisher =publisherEl.value;
    const quantity = quantityEl.value;
    const id = activatedBook.id;

    var foundBook = books.find(book => {
        return book.id == id;
    });
    foundBook.isbn = isbn;
    foundBook.bookName = bookName;
    foundBook.author = author;
    foundBook.publisher = publisher;
    foundBook.quantity = quantity;
    showAlert('Updated Successfully!', 'success');

    localStorage.setItem('books', JSON.stringify(books));
    displayBookDetails();
    clearFields();

    updateBtn.style.display = 'none';
    addBtn.style.display = 'inline-block';
}

function clearFields() {
    isbnEl.value = '';
    bookNameEl.value = '';
    authorEl.value = '';
    publisherEl.value = '';
    quantityEl.value = '';

}

function showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("book-detail-container");
    const form = document.getElementById("book-form");
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}

