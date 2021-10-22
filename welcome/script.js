const button = document.getElementById('button-login');



button.addEventListener('click', () => {
    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;

    if (dni.trim().length <= 0 || password.trim().length <= 0)
        return alert('Complete los campos');
    else
        localStorage.setItem('user-dni', dni);
    return window.location.assign('../home.html');
})