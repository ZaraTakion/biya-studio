import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel serve o site na raiz do domínio
  build: {
    outDir: 'dist'
  }
})
