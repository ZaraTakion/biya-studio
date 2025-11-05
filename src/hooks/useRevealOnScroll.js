import { useEffect } from 'react'

// Hook para aplicar efeito de revelação suave em elementos com a classe .reveal
export default function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    // Se o navegador não suportar IntersectionObserver, mostra tudo de uma vez
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('show'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
