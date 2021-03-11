const rootEl = document.getElementById("root");

renderHome();

function renderHome() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './html/home.html', true);

  xhr.onload = function () {
    if (this.status === 200) {
      rootEl.innerHTML = this.responseText;
    }
  }
  xhr.send();
}

function renderIssuedBooks() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './html/issuedbooks.html', true);

  xhr.onload = function () {
    if (this.status === 200) {
      rootEl.innerHTML = this.responseText;
    }
  }

  xhr.onloadend = function () {
    getAndDisplayTheUser();
    getAndDisplayTheBook();
    displayIssuedBookDetails();
  }
  xhr.send();
}

function renderBooks() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './html/book.html', true);

  xhr.onload = function () {
    if (this.status === 200) {
      rootEl.innerHTML = this.responseText;
    }
  }

  xhr.onloadend = function () {
    displayBookDetails();
  }
  xhr.send();

}

function renderUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', './html/user.html', true);

  xhr.onload = function () {
    if (this.status === 200) {
      rootEl.innerHTML = this.responseText;
    }
  }

  xhr.onloadend = function () {
    displayUserDetails();
  }
  xhr.send();
}