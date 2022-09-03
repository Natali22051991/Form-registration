const fname = document.querySelector('#fname');
const fnameP = document.querySelector('#fname-p');
const lname = document.querySelector('#lname');
const lnameP = document.querySelector('#lname-p');
const email = document.querySelector('#email');
const emailP = document.querySelector('#email-p');
const pword = document.querySelector('#pword');
const pwordP = document.querySelector('#pword-p');
let Regex = /^[a-zA-Zа-яА-ЯЁё ]+$/;

fname.addEventListener('blur', () => {
    fname.classList.add('invalid');
    const value = fname.value;
    if (value === '') {
        fnameP.textContent = 'введите имя';
    } else if (!Regex.test(value)) {
        fnameP.textContent = 'имя не должно содержать цифры и символы';
    } else if (value.length < 2) {
        fnameP.textContent = 'имя должно содержать не менее 2-х букв';
    } else {
        fnameP.textContent = '';
        fname.classList.remove('invalid');
    }
});
lname.addEventListener('blur', () => {
    lname.classList.add('invalid');
    const value = lname.value;
    if (value === '') {
        lnameP.textContent = 'введите фамилию';
    } else if (!Regex.test(value)) {
        lnameP.textContent = 'фамилия не должна содержать цифры и символы';
    } else if (value.length < 2) {
        lnameP.textContent = 'фамилия должна содержать не менее 2-х букв';
    } else {
        lnameP.textContent = '';
        lname.classList.remove('invalid');
    }
});
email.addEventListener('blur', () => {
    email.classList.add('invalid');
    const value = email.value;
    let Regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    if (value === '') {
        emailP.textContent = 'введите адрес электронной почты';
    } else if (!Regex.test(value)) {
        emailP.textContent = 'адрес электронной почты введен некорректно';
    }
    else {
        emailP.textContent = '';
        email.classList.remove('invalid');
    }
});
pword.addEventListener('blur', () => {
    pword.classList.add('invalid');
    const value = pword.value;
    let Regex = /^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{,15}$/;
    if (value === '') {
        pwordP.textContent = 'введите пароль';
        pword.classList.add('invalid');
    } else if (Regex.test(value)) {
        pwordP.textContent = 'пароль должен содержать латинские буквы (минимум 1 заглавную), цифры';

    } else if (value.length < 7) {
        pwordP.textContent = 'пароль должен содержать не меньше 7 символов';
    } else {
        pwordP.textContent = '';
        pword.classList.remove('invalid');
    }
});

