import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // El repositorio de GitHub debe llamarse exactamente "comercial-andina".
  base: '/comercial-andina/',
});
