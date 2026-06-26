import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server : {
    // Used For Docker Container
    host : true,
    port : 5173,
    watch : {
      usePolling: true,   // Set to true during dev and false during production to prevent hot reload
    },
    // Used for api connections
    proxy : {
      '/api' : {
        target : "http://localhost:5000",
        changeOrigin : true,
      },
    },
  },
})
