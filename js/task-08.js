const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', loginFormSubmit);

function loginFormSubmit (event) {

    event.preventDefault();

    const mail = event.currentTarget.email.value.trim();
    const password = event.currentTarget.password.value;

    if (!mail || !password) {

     return alert('Please fill empty field');

    };

    const result = { mail, password };

    console.log(result);
    
    event.currentTarget.reset();
}