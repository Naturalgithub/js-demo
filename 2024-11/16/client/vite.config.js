import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': {
        target: 'http://localhost:9527',
      }
    }
  },
  plugins: [vue()],
})
