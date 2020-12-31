const userEl = document.getElementById("userSelect");
const bookEl = document.getElementById("bookSelect");
const bookCount = document.getElementById("count");
const issueBtn = document.getElementById("issueBtn");
const table_container = document.getElementById("table-container");
var tbody = document.getElementById("tabbody");

getAndDisplayTheUser();
getAndDisplayTheBook();

function getAndDisplayTheUser() {
    var userList = JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < userList.length; i++) {
        var userName = userList[i].name;
        var option = document.createElement('option');
        option.text = userName;
        userEl.add(option);
    }
}

function getAndDisplayTheBook() {
    var bookList = JSON.parse(localStorage.getItem('books'));
    for (var i = 0; i < bookList.length; i++) {
        var name = bookList[i].bookName;
        var option = document.createElement('option');
        option.text = name;
        bookEl.add(option);
    }
}

function getIssuedBooks() {
    let issuedBooks;

    if (localStorage.getItem('issuedBooks') === null) {
        issuedBooks = [];
    } else {
        issuedBooks = JSON.parse(localStorage.getItem('issuedBooks'));
    }
    return issuedBooks;
}

function displayIssuedBookDetails() {
    var issuedBooks = getIssuedBooks();
    if (issuedBooks.length == 0) {
        tbody.innerHTML = `<tr>
        <td colspan = "3">
        <h6 class = "text-danger">No Records Found</h6>
        </td>
        </tr> `;
        return;
    }
    var groupBooksByUser = [];
    issuedBooks.forEach(function (issuedBook) {
        var foundIssuedBook = groupBooksByUser.find(book => {
            return book.userName == issuedBook.userName;
        });
        if (!foundIssuedBook) {
            var newIssuedBookObj = {};
            newIssuedBookObj['id'] = issuedBook.id;
            newIssuedBookObj['userName'] = issuedBook.userName;
            newIssuedBookObj['books'] = [{ bookName: issuedBook.bookName, count: issuedBook.count }];
            groupBooksByUser.push(newIssuedBookObj);
            return;
        }

        var foundBook = foundIssuedBook.books.find(book => {
            return book.bookName == issuedBook.bookName;
        })
        if (!foundBook) {
            foundIssuedBook.books.push({ bookName: issuedBook.bookName, count: issuedBook.count });
            return;
        }
        foundBook.count += +issuedBook.count;

    })

    tbody.innerHTML = groupBooksByUser.map(issuedBookObj => {
        return `<tr>
        <td style="width:30%">${issuedBookObj.id}</td>
        <td style="width:30%">${issuedBookObj.userName}</td>
        <td style="width:40%"><ul>${issuedBookObj.books.map(book => {
            return `<li> ${book.bookName}_${book.count} </li>`
        })}
        </ul></td>
        </tr>
        `
    }).join('');
}

function addIssuedBookDetails() {
    const user = userEl.value;
    const book = bookEl.value;
    const count = bookCount.value;
    var bookList = JSON.parse(localStorage.getItem('books'));

    var newlyIssuedBook = {};

    if (user === '' || book === '' || count === '') {
        showAlert('Please fill the details', 'error');
        return;
    }


    var foundBook = bookList.find(bookObj => {
        return book == bookObj.bookName
    })
    if (foundBook) {
        foundBook.issuedBook += +count;
        if (foundBook.issuedBook > foundBook.quantity) {
            showAlert('Count exceeds the quantity available', 'error');
            return;
        }
        newlyIssuedBook['id'] = generateID();
        newlyIssuedBook['userName'] = user;
        newlyIssuedBook['bookName'] = book;
        newlyIssuedBook['count'] = +count;

        var issuedBooks = getIssuedBooks();
        issuedBooks.push(newlyIssuedBook);
        showAlert("Issued Book details added successfully!", 'success');
        localStorage.setItem('issuedBooks', JSON.stringify(issuedBooks));
        displayIssuedBookDetails();
        clearFields();
        localStorage.setItem('books', JSON.stringify(bookList));
    }
}

function generateID() {
    return Math.floor(Math.random() * 1000);
}

document.addEventListener('DOMContentLoaded', displayIssuedBookDetails);

function clearFields() {
    userEl.value = document.getElementById('selected').value;
    bookEl.value = document.getElementById('selected').value;
    bookCount.value = '';

}

function showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("issueBookForm");
    const form = document.getElementById("book-form");
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);
}

issueBtn.addEventListener('click', addIssuedBookDetails);