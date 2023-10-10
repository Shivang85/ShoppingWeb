import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import css from '@rollup/plugin-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // [css()],
  
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
