import './_components.js';

const menu = document.querySelector('.menu')

if(menu){
  const burger = document.querySelector('.header__burger')
  burger.addEventListener('click', e => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })
}
