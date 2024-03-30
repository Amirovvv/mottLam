import { defineStore } from 'pinia'

import { api } from '@/api'
import type { QuizQuestion } from '@/types/games.types'

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [] as QuizQuestion[],
    currentQuestion: 0 as number,
  }),
  actions: {
    async fetchQuestions(): Promise<void> {
      try {
        const { data } = await api.get('quiz.json')
        this.questions = data
      }
      catch (err) {
        throw err
      }
    },
  },
})
