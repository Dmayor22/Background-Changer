let firstInput = document.getElementById('inputOne');
let secondInput = document.getElementById('inputTwo');
const h3 = document.querySelector('h3');
const body = document.getElementById('gradient')

function colorChange() {
    body.style.background = 
    'linear-gradient(to right, ' 
    + firstInput.value 
    + ',' 
    + secondInput.value + ')';

    h3.textContent = body.style.background + ';'
}
firstInput.addEventListener('input', colorChange)
secondInput.addEventListener('input', colorChange)
