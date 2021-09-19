const f_name = document.querySelector('#f_name');
const l_name = document.querySelector('#l_name');
const email = document.querySelector('#email');
const company = document.querySelector('#company');
const city = document.querySelector('#city');
const message = document.querySelector('#message');
const button = document.querySelector('#button');
const form = document.querySelector('#form');

function validate() {
    if (f_name.value.length < 5) return f_name.classList.add('error');
    if (l_name.value.length < 5) return l_name.classList.add('error');
    if (company.value.length < 5) return company.classList.add('error');
    if (city.value.length < 5) return city.classList.add('error');
    if (message.value.length < 5) return message.classList.add('error');
    return true;
}

function reset() {
    f_name.classList.remove('error');
    l_name.classList.remove('error');
    company.classList.remove('error');
    city.classList.remove('error');
    message.classList.remove('error');
}

f_name.addEventListener('click', reset);
l_name.addEventListener('click', reset);
email.addEventListener('click', reset);
company.addEventListener('click', reset);
city.addEventListener('click', reset);
message.addEventListener('click', reset);

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (validate()) null;
});