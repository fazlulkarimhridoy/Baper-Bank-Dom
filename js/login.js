document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    if (email === 'fkhridoy4321@gmail.com' && password === 'hridoy98karim@') {
        window.location.href = "bank.html";
    }
    else {
        alert('Tui password vule geli keno? Shomossha ki tor bhai?');
    }

})