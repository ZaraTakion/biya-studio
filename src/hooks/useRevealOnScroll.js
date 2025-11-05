export default function useRevealOnScroll() {
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal')
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[i].getBoundingClientRect().top
      const elementVisible = 100

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('show')
      } else {
        reveals[i].classList.remove('show')
      }
    }
  }

  window.addEventListener('scroll', revealElements)
  revealElements()

  return () => window.removeEventListener('scroll', revealElements)
}
