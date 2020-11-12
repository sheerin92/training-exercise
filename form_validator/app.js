//Getting all the form elements

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const minLength = username.getAttribute("minlength");
let togglePassword = document.querySelectorAll('.toggle-password');

//updating error

function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Updating success

function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Email validation

function checkEmail(input) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `Email is not valid`);
    }
}

//Check whether the fields are filled

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//Check length of username

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters length`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

//validating password

function passwordValidation(input, min, max) {

    if (input.value.length < min || input.value.length > max) {
        showError(input, `${getFieldName(input)} must be between ${min} and ${max} characters in length`);
        return;
    }

    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} must contain atleast one uppercase, lowercase letter and one digit and special character `);
    }

}

//Change password visibilty

function pwdVisibility() {
    if (password.type === 'password') {
        password.type = "text";
        togglePassword[0].classList.add('fa-eye-slash');
    } else {
        password.type = "password";
        togglePassword[0].classList.remove('fa-eye-slash');
    }
}

//Change confirm password visibility

function confirmPwdVisibility() {
    if (password2.type === 'password') {
        password2.type = "text";
       togglePassword[1].classList.add('fa-eye-slash');
    } else {
        password2.type = "password";
        togglePassword[1].classList.remove('fa-eye-slash');
    }
}

//To check whether the passwords match

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords does not match`);
    }
}

// To capitalize the first letter of the fieldname

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Adding event listener

form.addEventListener('submit', function (e) {

    e.preventDefault();
    if(username.value ==='' && email.value === '' && password.value === '' && password2.value === ''){
        checkRequired([username, email, password, password2]);
        return;
        }     
    checkLength(username, minLength, 15);
    checkEmail(email);
    passwordValidation(password, 8, 20);
    checkPasswordsMatch(password, password2);
});

