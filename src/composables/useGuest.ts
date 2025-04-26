import { getGuest } from "@/services/getGuest";
import { useGuestStore } from "@/stores/guestStore";
const _isLoading = ref(false)

export function useGuest() {
  const { setGuest, guest } = useGuestStore()
  const _errorMessage = ref('');

  return {
    isLoading: computed(() => {
      return _isLoading.value
    }),
    reloadGuest: async (token: string) => {
      if (guest) return;
      _isLoading.value = true

      try {
        const response = await getGuest(token);
        setGuest(response.data);
      } catch (error) {
        const _error = error as Error
        _errorMessage.value = _error.message;
      }
      finally {
        _isLoading.value = false;
      }
    },
    errorMessage: computed(() => {
      return _errorMessage.value
    })
  }
}
