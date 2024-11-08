function to_signin(form) {
    const homepage = document.getElementById('Homepage');
    const to_sign = document.getElementById('butI');
    const to_regis = document.getElementById('butU');

    if(form === 'login') {
        homepage.style.display = 'none';
        to_sign.style.display = 'block';
    }
}