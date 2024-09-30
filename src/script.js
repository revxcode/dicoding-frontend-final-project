const personalImageIcon = document.querySelectorAll('.personal-image-icon svg')

const automaticSlide = () => {
  setInterval(() => {
    personalImageIcon.forEach((icon, index) => {
      // Get the current active class (e.g., 'active-1')
      let activeClass = icon.classList.value.split('-')[1] 

      // Calculate the new active class based on the index
      let newActiveClass = 'active-' + ((parseInt(activeClass) % 3) + 1)

      // Remove the old active class and add the new one
      icon.classList.remove(`active-${activeClass}`) 
      icon.classList.add(newActiveClass)
    })
  }, 3000)
}

automaticSlide()