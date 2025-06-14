import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,             // listen on all addresses
    port: 5173,             // your dev port
    // explicitly allow your Gitpod hostname:
    allowedHosts: [
      '5173-cyrilcrgb-codemyqr-uq0gu0mdn2k.ws-eu120.gitpod.io'
    ]
  },
  define: {
    'process.env': {}
  }
})
