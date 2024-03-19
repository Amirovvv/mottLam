import Vue from '@vitejs/plugin-vue'
import path from 'node:path'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

import { unheadVueComposablesImports } from '@unhead/vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Layouts from 'vite-plugin-vue-layouts'

import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Layouts(),
    Markdown({}),
    UnoCSS()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})
