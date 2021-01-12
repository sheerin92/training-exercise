//Getting all the form elements

const form = $('#form');
const username = $('#username');
const email = $('#email');
const password = $('#password');
const password2 = $('#password2');
const minLength = username.attr("minlength");
let togglePassword = $('.toggle-password');

//updating error

function showError(input, message) {

    const formControl = input.parent();
    if(formControl.hasClass('success')){
        formControl.removeClass('success');
    }
    formControl.addClass('form-control error');
    const small = formControl.find('small');
    small.text(message);
}

// Updating success

function showSuccess(input) {

    const formControl = input.parent();
    if(formControl.hasClass('error')){
        formControl.removeClass('error');
    }
    formControl.addClass('form-control success');
}

//Email validation

function checkEmail(input) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.val().trim())) {
        showSuccess(input);
    } else {
        showError(input, `Email is not valid`);
    }
}

//Check whether the fields are filled

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.val().trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//Check length of username

function checkLength(input, min, max) {
    if (input.val().length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters length`);
    } else if (input.val().length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//validating password

function passwordValidation(input, min, max) {

    if (input.val().length < min || input.val().length > max) {
        showError(input, `${getFieldName(input)} must be between ${min} and ${max} characters in length`);
        return;
    }

    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (re.test(input.val().trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} must contain atleast one uppercase, lowercase letter and one digit and special character `);
    }

}

//Change password visibilty

function pwdVisibility() {
    const passwordElType = password.attr('type');
    const togglePasswordEl = togglePassword[0];
    if (passwordElType === 'password') {
         password.attr('type','text');
        $(togglePasswordEl).addClass('fa-eye-slash');
    } else {
        password.attr('type','password');
        $(togglePasswordEl).removeClass('fa-eye-slash');
    }
}

//Change confirm password visibility

function confirmPwdVisibility() {
    const password2ElType = password2.attr('type');
    const togglePassword2El = togglePassword[1];
    if (password2ElType === 'password') {
         password2.attr('type','text');
        $(togglePassword2El).addClass('fa-eye-slash');
    } else {
        password2.attr('type','password');
        $(togglePassword2El).removeClass('fa-eye-slash');
    }
}

//To check whether the passwords match

function checkPasswordsMatch(input1, input2) {
    if (input1.val() !== input2.val()) {
        showError(input2, `Passwords does not match`);
    } else{
        showSuccess(input2);
    }
}

// To capitalize the first letter of the fieldname

function getFieldName(input) {
    const id =  input.attr('id');
    return id.charAt(0).toUpperCase() + id.slice(1);
}


//Adding event listener

form.submit(function (e) {

    e.preventDefault();
    if (username.val() === '' && email.val() === '' && password.val() === '' && password2.val() === '') {
        checkRequired([username, email, password, password2]);
        return;
    }
    checkLength(username, minLength, 15);
    checkEmail(email);
    passwordValidation(password, 8, 20);
    checkPasswordsMatch(password, password2);
});

