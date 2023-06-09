import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather-app-react-vite",
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})
