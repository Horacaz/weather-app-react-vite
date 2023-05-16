import { defineConfig } from 'vite'
import 'vitest-fetch-mock';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather-app-react-vite",
  plugins: [react()],
  test: { setupFiles: ["./setupVitest.ts"]},
})
