<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseDock from './components/Common/BaseDock/BaseDock.vue';
import { useGuest } from './composables/useGuest';
import { useUserToken } from './composables/useUserToken';
import GlobalHeader from './components/Global/GlobalHeader/GlobalHeader.vue';
import GlobalDialogOpener from './components/Global/GlobalDialogOpener/GlobalDialogOpener.vue';
import { useDialog } from './composables/useDialog';
const { reloadGuest, errorMessage } = useGuest();
const { open } = useDialog();

const getToken = useUserToken();
const route = useRoute();

const token = computed(() => {
  return getToken();
})

onMounted(async () => {
  await until(token).toBeTruthy();
  await reloadGuest(token.value);
})

watch(errorMessage, (newErrorMessage) => {
  if (newErrorMessage) {
    open('AlertDialog', {
      title: 'エラーが発生しました',
      body: newErrorMessage,
    })
  }
});
</script>

<template>
  <main
    class="h-dvh bg-base-100 flex flex-col"
    :class="{
      'pb-16': route.name !== 'home'
    }"
  >
    <GlobalHeader v-if="route.name !== 'home'" />
    <GlobalDialogOpener />
    <RouterView />
    <BaseDock v-if="route.name !== 'home'" />
  </main>
</template>
