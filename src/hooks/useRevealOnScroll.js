import { useEffect } from 'react'

export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const handleScroll = () => {
      const trigger = window.innerHeight * 0.85
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top
        if (top < trigger) el.classList.add('show')
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}
