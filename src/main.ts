import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/main.scss'
import 'uno.css'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto/routes'
import { setupLayouts } from 'virtual:generated-layouts'
import pinia from '@/store'
import { createHead } from '@unhead/vue'

const head = createHead()

import i18n from '@/modules/i18n'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})


createApp(App).use(router).use(pinia).use(i18n).use(head).mount('#app')
