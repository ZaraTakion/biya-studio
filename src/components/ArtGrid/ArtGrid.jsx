import styles from './ArtGrid.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

const files = [
  'shot1.webp', 'shot2.webp', 'shot3.webp', 'shot4.webp', 'shot5.webp',
  'shot6.webp', 'shot7.webp', 'shot8.webp', 'shot9.webp', 'shot10.webp'
]

export default function ArtGrid() {
  useRevealOnScroll()

  return (
    <section id="trabalhos" className={`${styles.section} reveal`} aria-label="Galeria de arte">
      <h2 className={styles.title}>ARTE</h2>
      <div className={styles.grid}>
        {files.map((name, i) => (
          <div key={i} className={styles.item}>
            <img src={`/assets/shots/${name}`} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
