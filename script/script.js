const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('[data-appear="slide-in"]')
const typewriterText = document.querySelector('[data-js="typewriter"]')

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"

}

const delayAnimation = new IntersectionObserver((text, delayAnimation) => {
  if(!text[0].isIntersecting) {
    return
  }
  text[0].target.classList.remove('hidden')
  text[0].target.classList.add('typewriter-text')
  delayAnimation.unobserve(text[0].target)
}, appearOptions)

delayAnimation.observe(typewriterText)

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

const tween = KUTE.fromTo(
  '#blob1',
  { path: '#blob1'},
  { path: '#blob2'},
  { repeat: 999, duration: 3000, yoyo: true}
)

tween.start()