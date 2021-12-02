const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('[data-appear="slide-in"]')

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"

}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('appear')
    appearOnScroll.unobserve(entry.target)
  })
}, appearOptions)

faders.forEach(fader => {
  appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider)
})