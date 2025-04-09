import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

// Removed redundant import of tailwindcss

export const postcss = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Add your custom plugin here if it supports @theme
  },
};
