import './_components.js';

const menu = document.querySelector('.menu')

if(menu){
  const burger = document.querySelector('.header__burger')
  burger.addEventListener('click', e => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
  })
}


const modalButtons = document.querySelectorAll('.modal-btn')
const modal = document.querySelector('.modal')
if(modal && modalButtons.length > 0){
  const modalBody = modal.querySelector('.modal__body')
  modalBody.addEventListener('click', e => e.stopPropagation())
  const themeInput = modal.querySelector('input[type=hidden]')
  modalButtons.forEach(el => {
    if(el.dataset.theme){
      themeInput.value = el.dataset.theme
    }
    el.addEventListener('click', e => {
      e.preventDefault()

      modal.classList.add('active')
    })
  })

  modal.addEventListener('click', e => {
    e.preventDefault()
    modal.classList.remove('active')
    themeInput.value = 'Консультация'
  })
}
