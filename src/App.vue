<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseDock from './components/Common/BaseDock/BaseDock.vue';
import { useGuest } from './composables/useGuest';
import { useUserToken } from './composables/useUserToken';
import GlobalHeader from './components/Global/GlobalHeader/GlobalHeader.vue';
const { reloadGuest } = useGuest();

const getToken = useUserToken();
const route = useRoute();

const token = computed(() => {
  return getToken();
})

onMounted(async () => {
  await until(token).toBeTruthy();
  await reloadGuest(token.value);
})
</script>

<template>
  <main
    class="h-dvh bg-base-100 flex flex-col"
    :class="{
      'pb-16': route.name !== 'home'
    }"
  >
    <GlobalHeader v-if="route.name !== 'home'" />
    <RouterView />
    <BaseDock v-if="route.name !== 'home'" />
  </main>
</template>
