function toggleForm(form) {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const registerForm2 = document.getElementById('register-next');
    const forgotForm = document.getElementById('forgot-pw');
    const loginNav = document.querySelector('.nav .login a');
    const registerNav = document.querySelector('.nav .register a');

    if (form === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        registerForm2.style.display = 'none';
        forgotForm.style.display = 'none'
        loginNav.style.borderBottom = '2.5px solid #07475D'; 
        registerNav.style.borderBottom = 'none'; 
    } else if (form === 'register') {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        registerNav.style.borderBottom = '2.5px solid #07475D'; 
        loginNav.style.borderBottom = 'none';
    }else if (form === 'forgot-pw') {
        loginForm.style.display = 'none';
        forgotForm.style.display = 'block';
    }else if (form === 'register-next') {
        // Validate the registration form before transitioning to next step
        const registerFormInputs = document.querySelectorAll('#register input');
        let isValid = true;
        
        // Loop through all input fields and check if they are valid
        registerFormInputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity(); // Show browser validation messages
            }else if (isValid) {
                registerForm.style.display = 'none';
                registerForm2.style.display = 'block';
            }
        });
    }
}