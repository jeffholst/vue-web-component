import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      name: 'MyVueComponentLib', // Required but not used
      entry: 'main.js',
    },
  },
})
