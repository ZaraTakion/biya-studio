import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração Vite para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/biya-studio/', // caminho do repositório no GitHub
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true
  }
})
