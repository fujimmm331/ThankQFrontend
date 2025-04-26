import { Quiz } from "@/models/quiz";
import { getQuizzes } from "@/services/getQuizzes";
import { useQuizStore } from "@/stores/quizStore";

export function useQuiz() {
  const store = useQuizStore()
  const _isLoading = ref(false)
  const _errorMessage = ref('');
  const storage = useSessionStorage<Quiz[]>('thankQ/quiz-answer', [])

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    reloadQuiz: async () => {
      if (store.quizzes.length > 0) return;
      if (storage.value.length > 0) {
        store.setQuizzes(storage.value);
        return
      }

      try {
        const response = await getQuizzes();
        store.setQuizzes(response.data.map((item) => {
          return new Quiz(item);
        }));
      } catch (error) {
        const _error = error as Error
        _errorMessage.value = _error.message;
      }
    },
    errorMessage: computed(() => {
      return _errorMessage.value
    }),
    saveToStorage: () => {
      storage.value = store.quizzes;
    }
  }
}
