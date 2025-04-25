import { getMessage } from "@/services/getMessage";
import { useMessageStore } from "@/stores/messageStore";

export function useMessage() {
  const { setMessages, findMessage } = useMessageStore()
  const _isLoading = ref(false)
  const _errorMessage = ref('');

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    reloadMessage: async (token: string) => {
      const message = findMessage(token);
      if (message) return;

      try {
        const response = await getMessage(token);
        setMessages(token, [response.data]);
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
