import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'data',
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.loca.lt', 'wending-gpt-image.loca.lt']
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['.loca.lt', 'wending-gpt-image.loca.lt']
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-lucide': ['lucide-react'],
          'vendor-supabase': ['@supabase/supabase-js']
        }
      }
    }
  }
});
