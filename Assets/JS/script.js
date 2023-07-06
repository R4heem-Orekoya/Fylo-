const emailInput = document.querySelector('.input');
let text = document.querySelector('.valid')

emailInput.addEventListener('input', ()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validRegex)) {
        text.style.display = 'none';
    } 
    else {
        text.style.display = 'block';
    }
})