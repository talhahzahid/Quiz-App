console.log('helllo');

const namee = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');



form.addEventListener('submit' , (Event){
    Event.preventDefault()
    console.log(namee.value);
    console.log(email.value);
    console.log(password.value);
}