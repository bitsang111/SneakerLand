import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
      },
      '/img': {
        target: 'http://localhost:3000/',
      },
    },
  },
});
