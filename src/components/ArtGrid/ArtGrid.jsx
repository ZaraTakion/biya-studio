import styles from './ArtGrid.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const images = [
  { src: '/assets/shots/shot1.webp', caption: 'Biya — Expressã' },
  { src: '/assets/shots/shot2.webp', caption: 'Biya — Gotica' },
  { src: '/assets/shots/shot3.webp', caption: 'Biya — Noir' },
  { src: '/assets/shots/shot4.webp', caption: 'Biya — Focus' },
  { src: '/assets/shots/shot5.webp', caption: 'Biya — Rage' },
  { src: '/assets/shots/shot6.webp', caption: 'Biya — Studio' },
  { src: '/assets/shots/shot7.webp', caption: 'Biya — Intense' },
  { src: '/assets/shots/shot8.webp', caption: 'Biya — Café' },
  { src: '/assets/shots/shot9.webp', caption: 'Biya — Street' },
  { src: '/assets/shots/shot10.webp', caption: 'Biya — Noir 2' }
]

export default function ArtGrid() {
  useRevealOnScroll()

  return (
    <section id="trabalhos" className={`${styles.section} reveal`} aria-label="Galeria de arte">
      <h2 className={styles.title}>ARTE</h2>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.item}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className={styles.caption}>{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
