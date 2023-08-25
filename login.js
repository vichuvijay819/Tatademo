// script.js

// Predefined username and password
const validUsername = "Vijay";
const validPassword = "12345";

// Get the form element
const form = document.getElementById('login-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', function (event) {
    // Get the values of the username and password fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the input matches the predefined username and password
    if (username == validUsername) {
        // Redirect to the home page upon successful login
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
        event.preventDefault(); // Prevent form submission
    }
});
