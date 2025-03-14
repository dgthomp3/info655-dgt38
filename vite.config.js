import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/info655-dgt38/',
  test: {
    globals: true, // Enable global expect
    environment: "jsdom", // Simulates a browser-like environment
  },
});