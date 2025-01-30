import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Change this to your desired hostname or IP address
    port: 3000, // Change this to your desired port number
  },
})
