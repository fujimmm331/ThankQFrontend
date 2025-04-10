<script setup lang="ts">
import { ref } from "vue";

const progress = ref(40);

</script>

<template>
  <input
    type="range"
    min="0"
    max="100"
    v-model="progress"
    class="range" />
</template>

