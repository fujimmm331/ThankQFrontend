export function useUserToken() {
  const route = useRoute();

  return computed(() => {
    return route.params.token as string;
  })
}
