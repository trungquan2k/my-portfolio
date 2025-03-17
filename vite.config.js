/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    mimeTypes: {
      jsx: 'text/javascript',
    },
    base: './',
  },
  build: {
    outDir: 'dist/index.html', // Ensure this is correctly set
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
