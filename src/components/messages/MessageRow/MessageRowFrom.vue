<script setup lang="ts">
import MessageRow from './MessageRow.vue';

// defineProps<BaseTextProps>();

</script>

<template>
  <MessageRow>
    <p class="text-end flex-grow-1">
      <slot />
    </p>
  </MessageRow>
</template>
