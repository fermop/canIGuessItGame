const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

const btnActive = document.querySelectorAll('.btn');
let contador = 0;
const btnReveal = document.querySelector('.btn-reveal');
const resultWrapper = document.querySelector('.result-wrapper');
const resultNumber = document.querySelector('.result-number');
const btnPlayAgain = document.querySelector('.btn-playAgain');

hamburger.onclick = () => navList.classList.toggle('toggle');


function active(e) {
  if(e.target.textContent == 'Sí' || e.target.textContent == 'Yes') {
    e.target.classList.add('btn--active');
    e.target.setAttribute('disabled', '');
    contador += e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent * 1;

    e.target.nextElementSibling.classList.remove('btn--active');
    e.target.nextElementSibling.removeAttribute('disabled');
  } else if(e.target.previousElementSibling.classList.contains('btn--active') && contador > 0) {
    e.target.classList.add('btn--active');
    e.target.setAttribute('disabled', '');
    contador -= e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent * 1;

    e.target.previousElementSibling.classList.remove('btn--active');
    e.target.previousElementSibling.removeAttribute('disabled');
  } else {
    e.target.classList.add('btn--active');
    e.target.setAttribute('disabled', '');

    e.target.previousElementSibling.classList.remove('btn--active');
    e.target.previousElementSibling.removeAttribute('disabled');
  }
}

btnReveal.onclick = function() {
  resultWrapper.classList.toggle('show');
  resultNumber.textContent = contador;
}

btnPlayAgain.onclick = function() {
  resultWrapper.classList.toggle('show');
  contador = 0;
  for (let i = 0; i < btnActive.length; i++) {
    btnActive[i].classList.remove('btn--active');
    btnActive[i].removeAttribute('disabled');
  }
}

for (let i = 0; i < btnActive.length; i++) {
  btnActive[i].addEventListener('click', active);
}