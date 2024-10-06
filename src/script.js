// animate slide
const animateSlide = () => {
  const personalImageIcon = document.querySelectorAll('.personal-image-icon svg')

  setInterval(() => {
    personalImageIcon.forEach((icon) => {
      let activeClass = icon.classList.value.split('-')[1] 
      let newActiveClass = 'active-' + ((parseInt(activeClass) % personalImageIcon.length) + 1)

      icon.classList.remove(`active-${activeClass}`) 
      icon.classList.add(newActiveClass)
    })
  }, 5000)
}

animateSlide()

// dynamic scroll navigation
const scrollToTarget = (id) => { 
  const targetElement = document.querySelectorAll('section[id]')
  targetElement.forEach((element) => {
    if (element.id === id) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}
