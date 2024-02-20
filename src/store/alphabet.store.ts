import { defineStore } from 'pinia'
import { api } from '@/api'

import { AlphabetItem } from '@/types/alphabet.types'

export const useAlphabetStore = defineStore('alphabetStore', {
  state: () => ({
    alphabet: [] as AlphabetItem[]
  }),
  actions: {
    async fetchAlphabet(): Promise<void> {
      try {
        const { data } = await api.get('alphabet.json')
        this.alphabet = data
      } catch (err) {
        console.error(err)
      }

    }
  }
})