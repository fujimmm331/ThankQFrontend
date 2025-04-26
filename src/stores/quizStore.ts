import { defineStore } from 'pinia'
import type { Quiz } from '@/models/quiz';

export const useQuizStore = defineStore('quiz', () => {
  const quizzes = ref<Quiz[]>([]);
  function setQuizzes(_quizzes: Quiz[]) {
    quizzes.value = _quizzes
  }

  return { setQuizzes, quizzes }
})
