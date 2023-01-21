const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', loginFormSubmit);

function loginFormSubmit (event) {

    event.preventDefault();

    const mail = event.currentTarget.email.value;
    const password = event.currentTarget.password.value

    if (mail === '' || password === '') {

      alert('Please fill empty field')

    }

    const result = { mail: mail, password: password };

    console.log(result);
    
    event.currentTarget.reset();
}