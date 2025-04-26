import { getQuizzes } from "@/services/getQuizzes";
import { useQuizStore } from "@/stores/quizStore";

export function useQuiz() {
  const { setQuizzes, quizzes } = useQuizStore()
  const _isLoading = ref(false)
  const _errorMessage = ref('');

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    reloadQuiz: async () => {
      if (quizzes.length > 0) return;

      try {
        const response = await getQuizzes();
        setQuizzes(response.data);
      } catch (error) {
        const _error = error as Error
        _errorMessage.value = _error.message;
      }
    },
    errorMessage: computed(() => {
      return _errorMessage.value
    })
  }
}
