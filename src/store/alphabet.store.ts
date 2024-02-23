import { defineStore } from 'pinia'
import { api } from '@/api'

import { AlphabetItem } from '@/types/alphabet.types'

export const useAlphabetStore = defineStore('alphabetStore', {
  state: () => ({
    alphabet: [] as AlphabetItem[],
    letter: {} as AlphabetItem | ''
  }),
  actions: {
    async fetchAlphabet(): Promise<void> {
      try {
        const { data } = await api.get('alphabet.json')
        this.alphabet = data
      } catch (err) {
        throw err;
      }
    },
    async fetchAlphabetLetter(id: number): Promise<void> {
      this.letter = ''

      try {
        const { data } = await api.get(`alphabet/${id}.json`)
        this.letter = data
      } catch (err) {
        throw err;
      }
    }
  },
})