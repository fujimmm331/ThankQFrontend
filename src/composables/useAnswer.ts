import { postAnswer, type PostAnswerParamsType } from "@/services/postAnswer";
import { useGuestStore } from "@/stores/guestStore";
import { useQuizStore } from "@/stores/quizStore";

export function useQuizAnswer() {
  const store = useQuizStore()
  const guestStore = useGuestStore();
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
      guest_id: guestStore.guest?.id ?? -1,
    }
  }

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    sendAnswer: async () => {
      _isLoading.value = true
      try {
        const params = _createAnswerParams();
        if (params.guest_id === -1) {
          throw Error('ゲストの情報が取得できてないようです。一度画面をリロードしてください。')
        }
        await postAnswer(params);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);

        const _error = error as Error
        _errorMessage.value = _error.message;
      }
      finally {
        _isLoading.value = false
      }
    },
    errorMessage: computed(() => {
      return _errorMessage.value
    })
  }
}
