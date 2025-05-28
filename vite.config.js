// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/2025CapstoneWeb/',  // 꼭 이거 추가해야 GitHub Pages에서 경로 제대로 잡힘
  plugins: [react()],
})
