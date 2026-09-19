import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' faz o build funcionar em qualquer caminho do GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
