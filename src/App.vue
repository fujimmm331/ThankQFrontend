<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseDock from './components/Common/BaseDock/BaseDock.vue';
</script>

<template>
  <main class="h-dvh bg-base-100 pb-16">
    <RouterView />
    <BaseDock />
  </main>
</template>
