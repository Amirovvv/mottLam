import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto/routes'

import { createHead } from '@unhead/vue'
import { setupLayouts } from 'virtual:generated-layouts'

import '@/styles/main.scss'
import 'uno.css'

import i18n from '@/modules/i18n'
import pinia from '@/store'
import App from './App.vue'

const head = createHead()

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

createApp(App).use(router).use(pinia).use(i18n).use(head).mount('#app')
