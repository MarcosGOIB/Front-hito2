import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirigir las solicitudes de API al backend
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      // Redirigir las solicitudes de imágenes al backend
      '/uploads': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
});