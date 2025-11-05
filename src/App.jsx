import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sobre from './components/Sobre/Sobre'
import ArtGrid from './components/ArtGrid/ArtGrid'
import Lives from './components/Lives/Lives'
import Community from './components/Community/Community'
import Footer from './components/Footer/Footer'
import FloatingButtons from './components/FloatingButtons/FloatingButtons'

export default function App() {
  return (
    <div className="App">
      {/* Fundo animado global */}
      <div className="animated-bg"></div>

      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main>
        <Hero />
        <Sobre />
        <ArtGrid />
        <Lives />
        <Community />
      </main>

      {/* Botões flutuantes */}
      <FloatingButtons />

      {/* Rodapé */}
      <Footer />
    </div>
  )
}
