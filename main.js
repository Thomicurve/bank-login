const localStorageValue = localStorage.getItem('user-dni');
const userDNI = document.getElementById('userDNI');

userDNI.textContent = localStorageValue;