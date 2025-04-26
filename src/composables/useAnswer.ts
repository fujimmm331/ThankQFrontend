import { postAnswer, type PostAnswerParamsType } from "@/services/postAnswer";
import { useQuizStore } from "@/stores/quizStore";

export function useQuizAnswer() {
  const store = useQuizStore()
  const _isLoading = ref(false)
  const _errorMessage = ref('');

  const _createAnswerParams = (): PostAnswerParamsType => {
    const quizChoiceIds = store.quizzes
      .filter((quiz) => {
        return typeof quiz.answer_id ==='number';
      })
      .map((quiz) => {
        return Number(quiz.answer_id);
      })

    return {
      quiz_choice_ids: quizChoiceIds,
      guest_id: 1,
    }
  }

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    sendAnswer: async () => {
      _isLoading.value = true
      try {
        await postAnswer(_createAnswerParams());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);

        const _error = error as Error
        _errorMessage.value = _error.message;
      }
      finally {
        setTimeout(() => {
          _isLoading.value = false
        }, 4000)
      }
    },
    errorMessage: computed(() => {
      return _errorMessage.value
    })
  }
}
