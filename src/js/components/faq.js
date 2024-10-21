const faqItems = document.querySelectorAll('.faq-item')

if(faqItems.length > 0){
  faqItems.forEach((item, index) => {
    const btn = item.querySelector('.faq-item__btn')
    const content = item.querySelector('.faq-item__content')
    if(item.classList.contains('active')){
      content.style.maxHeight = content.scrollHeight + 'px'
    }
    btn.addEventListener('click', e => {
      e.preventDefault()
      let isActive = item.classList.toggle('active')


      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })
  })
}
