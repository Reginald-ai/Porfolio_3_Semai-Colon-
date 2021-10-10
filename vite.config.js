const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main1: resolve(__dirname, 'blog.html'),
        main2: resolve(__dirname, 'freebies.html'),
        main3: resolve(__dirname, 'porfolio.html'),
        main4: resolve(__dirname, 'services.html'),
    
      }
    }
  }
})