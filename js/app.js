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
    console.log(contador);
  } else if(e.target.previousElementSibling.classList.contains('btn--active') && contador > 0) {
    e.target.classList.add('btn--active');
    e.target.setAttribute('disabled', '');
    contador -= e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent * 1;

    e.target.previousElementSibling.classList.remove('btn--active');
    e.target.previousElementSibling.removeAttribute('disabled');
    console.log(contador);
  } else {
    e.target.classList.add('btn--active');
    e.target.setAttribute('disabled', '');

    e.target.previousElementSibling.classList.remove('btn--active');
    e.target.previousElementSibling.removeAttribute('disabled');
    console.log(contador);
  }
}

btnReveal.onclick = function() {
  resultWrapper.classList.toggle('show');
  console.log(resultNumber.textContent = contador);
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

btnActive[0].addEventListener('click', active);
btnActive[1].addEventListener('click', active);
btnActive[2].addEventListener('click', active);
btnActive[3].addEventListener('click', active);
btnActive[4].addEventListener('click', active);
btnActive[5].addEventListener('click', active);
btnActive[6].addEventListener('click', active);
btnActive[7].addEventListener('click', active);
btnActive[8].addEventListener('click', active);
btnActive[9].addEventListener('click', active);
btnActive[10].addEventListener('click', active);
btnActive[11].addEventListener('click', active);