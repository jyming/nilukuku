import vue from '@vitejs/plugin-vue'
import ViteComponents, {
  VarletUIResolver
} from 'vite-plugin-components'
import {
  defineConfig
} from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [VarletUIResolver()]
    })
  ],
  base: "./",
  server: {
    host: '0.0.0.0'
  }
})