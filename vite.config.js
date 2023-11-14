import { fileURLToPath, URL } from 'node:url'
import { GenerateSW } from 'workbox-webpack-plugin'
import { defineConfig, load } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === "development" ? "/vuejs-pwa/" : "",
  plugins: [
    vue(),
  ],
  configureWebpack: {
    plugins: [new GenerateSW()]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
