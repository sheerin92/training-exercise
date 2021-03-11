const rootEl = document.getElementById("root");

renderHome();

function renderHome() {
  rootEl.innerHTML = `<div class="home-container">
    <div class="row">
        <div class="col-lg-12 text-center my-5">
            <h1>Welcome to Online Libraray Management System</h1>
        </div>
    </div>
</div>`
}

function renderIssuedBooks() {
  rootEl.innerHTML = `<div class="container">
    <div class="row">
        <div class="col-md-12 mx-auto">
            <div class="card card-body mt-3" id="issueBookForm">
                <form id="book-form">
                    <div class="row" id="form">
                        <div class="col-md-3 mx-auto">
                            <label for="userSelect">Users</label>
                            <select id="userSelect" class="form-control">
                                <option selected>--select--</option>
                            </select>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <label for="name">Books</label>
                            <select id="bookSelect" class="form-control">
                                <option id="selected" selected>--select--</option>
                            </select>
                        </div>
                        <div class="col-md-3 mx-auto">
                            <label for="count">Book Count</label>
                            <input type="number" id="count" class="form-control" placeholder="count" />
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="u-full-width btn btn-primary" id="issueBtn">Issue Book</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 mx-auto">
            <div id="table-container">
                <table id="issuetab">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody id="tabbody"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>`
}

function renderBooks() {
  rootEl.innerHTML = `<div class="container mt-5" id="book-detail-container">
    <form id="book-form">
      <div class="form-group row">
        <label for="ISBN" class="col-sm-2 col-form-label">ISBN<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="ISBN" placeholder="ISBN">
        </div>
      </div>
      <div class="form-group row">
        <label for="bookName" class="col-sm-2 col-form-label">Book Name<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="bookName" placeholder="Book Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="author" class="col-sm-2 col-form-label">Author<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="author" placeholder="Author">
        </div>
      </div>
      <div class="form-group row">
        <label for="publisher" class="col-sm-2 col-form-label">Publisher<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="publisher" placeholder="Publisher">
        </div>
      </div>
      <div class="form-group row">
        <label for="quantity" class="col-sm-2 col-form-label">Quantity<span>*</span></label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="quantity" placeholder="Quantity">
        </div>
      </div>
  
      <div class="form-group row">
        <div class="col-sm-12 text-center">
          <button class="btn btn-info" id="addBookBtn" type="button" onclick="addBookDetails()">Add Book</button>
          <button class="btn btn-info" id="updateBookBtn" type="button" onclick="updateBookDetails()">Update Book</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div id="book-table-container">
          <table id="bookTab">
            <thead>
              <tr>
                <th>ID</th>
                <th>ISBN</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Quantity</th>
                <th>Issued Books</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="bookTabBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`
}

function renderUsers() {
  rootEl.innerHTML = `<div class="container mt-5" id="user-detail-container">
    <form id="user-form">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">User Name<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" placeholder="User Name">
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email<span>*</span></label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>
      </div>
      <div class="form-group row">
        <label for="address" class="col-sm-2 col-form-label">Address<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="address" placeholder="Address">
        </div>
      </div>
      <div class="form-group row">
        <label for="city" class="col-sm-2 col-form-label">City<span>*</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="city" placeholder="City">
        </div>
      </div>
      <div class="form-group row">
        <label for="contactNo" class="col-sm-2 col-form-label">Contact No<span>*</span></label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="contactNo" placeholder="Contact No">
        </div>
      </div>
  
      <div class="form-group row">
        <div class="col-sm-12 text-center">
          <button class="btn btn-info" id="addUserBtn" type="button">Add User</button>
          <button class="btn btn-info" id="updateUserBtn" type="button">Update User</button>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div id="user-table-container">
          <table id="bookTab">
            <thead>
              <tr>
                <th>ID</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>contact No</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody id="userTabBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`
}