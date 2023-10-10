import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Configure manual chunks to separate Bootstrap CSS
    rollupOptions: {
      output: {
        manualChunks: {
          'bootstrap-css': ['bootstrap/dist/css/bootstrap.css'],
        },
      },
    },
  },
})
