<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseDock from './components/Common/BaseDock/BaseDock.vue';
import { useGuest } from './composables/useGuest';
import { useUserToken } from './composables/useUserToken';
const { reloadGuest } = useGuest();

const getToken = useUserToken();

const token = computed(() => {
  return getToken();
})

onMounted(async () => {
  await until(token).toBeTruthy();
  await reloadGuest(token.value);
})
</script>

<template>
  <main class="h-dvh bg-base-100 pb-16">
    <RouterView />
    <BaseDock />
  </main>
</template>
