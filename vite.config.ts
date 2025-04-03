import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: '/portfolio/', // Set base path for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Fix for GitHub Pages
    assetsDir: 'assets',
    minify: 'terser',
    rollupOptions: {
      output: {
        // Ensure the proper path for assets
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
  },
});
