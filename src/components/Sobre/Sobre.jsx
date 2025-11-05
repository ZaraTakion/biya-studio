import styles from './Sobre.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function Sobre() {
  useRevealOnScroll()

  return (
    <section id="sobre" className={`${styles.sobre} reveal`} aria-label="Sobre Biya">
      <div className={styles.inner}>
        <h2 className={styles.title}>SOBRE</h2>

        <div className={styles.card}>
          <p>
            Este espaço é dedicado à arte e ao processo. As transmissões mostram o que acontece entre um traço e outro as pausas, as tentativas, os acertos.
          </p>
          <p>
            As criações seguem um ritmo calmo, guiado pela luz, pela cor e pela presença do momento. Cada trabalho é um registro do instante em que algo simples ganha forma.
          </p>
          <p>
            Biya atua entre o digital e o cotidiano, buscando traduzir atmosfera em composição. É menos sobre a artista e mais sobre o que emerge do silêncio quando alguém se permite observar.
          </p>
        </div>
      </div>
    </section>
  )
}
