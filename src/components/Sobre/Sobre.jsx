import styles from './Sobre.module.css'
import useRevealOnScroll from '../../hooks/useRevealOnScroll'

export default function Sobre() {
  useRevealOnScroll()

  return (
    <section id="sobre" className={`${styles.sobre} reveal`} aria-label="Sobre a Biya">
      <div className={styles.inner}>
        <h2 className={styles.title}>SOBRE</h2>

        <div className={styles.card}>
          <p>
            Biya é uma artista digital e criadora de conteúdo que combina ilustração, narrativa e presença ao vivo para criar uma experiência acolhedora e inspiradora.
            Sua arte mistura leveza estética e temas introspectivos, resultando em um estilo que se destaca pela autenticidade e sensibilidade visual.
          </p>
          <p>
            No estúdio Biya, cada obra é uma extensão do processo criativo – explorando cor, forma e emoção.
            Além das ilustrações, Biya também compartilha momentos de criação em suas transmissões ao vivo, aproximando o público da jornada artística.
          </p>
          <p>
            O projeto Biya Studio é um espaço de expressão, aprendizado e comunidade. Criado com carinho, pensado para inspirar e conectar pessoas que vivem a arte como linguagem.
          </p>
        </div>
      </div>
    </section>
  )
}
