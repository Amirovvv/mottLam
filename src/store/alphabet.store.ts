import { defineStore } from 'pinia'

import { api } from '@/api'

export const useAlphabetStore = defineStore('alphabet', {
  state: () => ({
    alphabet: []
  }),
  actions: {
    async fetchAlphabet() {
      try {
        const { data } = await api.get('alphabet.json')
        this.alphabet = data
      } catch (err) {
        console.error(err)
      }

    }
  }
})