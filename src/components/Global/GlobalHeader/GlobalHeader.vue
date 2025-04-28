<script setup lang="ts">
// import type { GlobalHeaderProps } from './Type';

// defineProps<GlobalHeaderProps>();
const router = useRouter();
const route = useRoute();

async function onHome() {
  await router.push({
    name: 'home',
    params: {
      token: route.params.token,
    }
  })
}
</script>

<template>
  <header class="navbar bg-base-100 shadow-sm z-1">
    <a
      class="btn btn-ghost text-xl"
      @click="onHome"
    >
      ThankQ
    </a>
  </header>
</template>
